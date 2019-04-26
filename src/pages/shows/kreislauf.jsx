import React from "react"
import ShowLayout from "../../components/show/showLayout"
import { graphql } from "gatsby"

import { kreislauf } from "../../data/trilogy"
const { title, location, date, bodyText } = kreislauf

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
    showHtml: markdownRemark(
      frontmatter: { title: { eq: "kreislauf show text" } }
    ) {
      html
    }
  }
`

export default ({ data }) => (
  <ShowLayout
    title={title}
    location={location}
    date={date}
    headerImage={data.headerImage}
    galleryImageNodes={data.galleryImages.edges}
    bodyHtml={data.showHtml.html}
  />
)
