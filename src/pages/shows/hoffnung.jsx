import React from "react"
import { graphql } from "gatsby"

import ShowLayout from "../../components/show/showLayout"

export const pageData = graphql`
  query HoffnungPageQuery {
    headerImage: allFile(
      filter: { relativeDirectory: { eq: "trilogy" }, name: { eq: "hoffnung" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(cropFocus: NORTH) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    galleryImages: allFile(
      filter: { relativeDirectory: { eq: "shows/hoffnung" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fixed(width: 195) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    showHtml: markdownRemark(frontmatter: { title: { eq: "Hoffnung" } }) {
      frontmatter {
        title
        location
        date
      }
      html
    }
  }
`

export default ({ data }) => (
  <ShowLayout
    headerImage={data.headerImage}
    headerImageClass="hoffnung-header"
    bodyHtml={data.showHtml.html}
    date={data.showHtml.frontmatter.date}
    title={data.showHtml.frontmatter.title}
    location={data.showHtml.frontmatter.location}
    galleryImageNodes={[]}
  />
)
