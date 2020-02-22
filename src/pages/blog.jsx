import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { PostListItem } from "../components/blog"
import { Layout } from "../components"

import "../styles/blog.scss"

const getTitleFromBlogPostNode = node =>
  node.childMarkdownRemark.frontmatter.title
const getAuthorFromBlogPostNode = node =>
  node.childMarkdownRemark.frontmatter.author
const getSlugFromBlogPostNode = node =>
  node.childMarkdownRemark.frontmatter.slug
const getExcerptFromBlogPostNode = node => node.childMarkdownRemark.excerpt

const getImageForPost = (edges, postFileName, defaultImage) => {
  const blogPostNode = edges.filter(({ node }) => node.name === postFileName)
  if (blogPostNode.length === 0) {
    return defaultImage
  } else {
    return blogPostNode[0].node.childImageSharp.fixed
  }
}

const BlogPage = ({ data }) => {
  const mostRecent = data.blogPosts.edges[0].node
  const defaultImageFixed =
    data.defaultPostImage.edges[0].node.childImageSharp.fixed
  return (
    <Layout blog>
      <div className="header">
        <Link
          to={`/blog/${getSlugFromBlogPostNode(mostRecent)}`}
          style={{ textDecoration: "none" }}
        >
          <div className="header__most-recent">
            <div className="header__most-recent__image">
              <Img
                className="header__most-recent__image__img"
                fixed={defaultImageFixed}
              />
            </div>
            <div className="header__most-recent__text">
              <div className="header__most-recent__text__tag">New</div>
              <div className="header__most-recent__text__title">
                {getTitleFromBlogPostNode(mostRecent)}
              </div>
              <div className="header__most-recent__text__author">
                {getAuthorFromBlogPostNode(mostRecent)}
              </div>
              <div className="header__most-recent__text__preview">
                {getExcerptFromBlogPostNode(mostRecent)}
              </div>
            </div>
          </div>
        </Link>
        <div className="header__colour-stripe" />
      </div>

      <section className="body">
        <ol className="body__posts">
          {data.blogPosts.edges.map(({ node }) => {
            const { id, name, childMarkdownRemark } = node
            const {
              title,
              author,
              date,
              slug,
            } = childMarkdownRemark.frontmatter
            const imageFixed = getImageForPost(
              data.postImages.edges,
              name,
              defaultImageFixed
            )
            return (
              <PostListItem
                id={id}
                title={title}
                author={author}
                date={date}
                fixedImage={imageFixed}
                linkUrl={`/blog/${slug}`}
                preview={childMarkdownRemark.excerpt}
              />
            )
          })}
        </ol>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query {
    defaultPostImage: allFile(
      filter: {
        sourceInstanceName: { eq: "blogPostHeaderImages" }
        name: { eq: "genau-logo" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    postImages: allFile(
      filter: { sourceInstanceName: { eq: "blogPostHeaderImages" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 125, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    blogPosts: allFile(
      filter: {
        sourceInstanceName: { eq: "blogPosts" }
        extension: { eq: "md" }
      }
      sort: { fields: name, order: DESC }
    ) {
      edges {
        node {
          id
          name
          childMarkdownRemark {
            frontmatter {
              title
              author
              date
              slug
            }
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  }
`

export default BlogPage
