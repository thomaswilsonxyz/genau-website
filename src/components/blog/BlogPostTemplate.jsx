import React from "react"
import Img from "gatsby-image"

import { Layout } from "../index"

import "./BlogPostTemplate.scss"
import "../../styles/blog.scss"

const BlogPostTemplate = ({ pageContext }) => {
  const post = pageContext.postRemark
  return (
    <Layout blog>
      <div className="post-header">
        <div className="post-header__post">
          <div className="post-header__post__image">
            <Img
              className="post-header__post__image__img"
              fixed={pageContext.postImageFixed}
            />
          </div>
          <div className="post-header__post__text">
            <div className="post-header__post__text__title">
              {post.frontmatter.title}
            </div>
            <div className="post-header__post__text__author">
              {post.frontmatter.author}
            </div>
            <div className="post-header__post__text__date">
              {post.frontmatter.date}
            </div>
          </div>
        </div>
      </div>
      <div className="header__colour-stripe" />
      <section className="blog-post">
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </Layout>
  )
}

export default BlogPostTemplate
