import React from "react"
import ShowLayout from "../../components/show/showLayout"
import { graphql } from "gatsby"

export const query = graphql`
  query KreislaufPageQuery {
    headerImage: allFile(
      filter: {
        relativeDirectory: { eq: "trilogy" }
        name: { eq: "kreislauf" }
      }
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
      filter: { relativeDirectory: { eq: "shows/kreislauf" } }
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
    showHtml: markdownRemark(frontmatter: { title: { eq: "Kreislauf" } }) {
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
    title={data.showHtml.frontmatter.title}
    date={data.showHtml.frontmatter.date}
    location={data.showHtml.frontmatter.location}
    headerImage={data.headerImage}
    headerImageClass="kreislauf-header"
    galleryImageNodes={data.galleryImages.edges}
    bodyHtml={data.showHtml.html}
  />
)
