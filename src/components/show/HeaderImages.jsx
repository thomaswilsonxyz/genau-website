import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./HeaderImage.scss"

const ebbQuery = graphql`
  query {
    headerImage: allFile(
      filter: { relativeDirectory: { eq: "trilogy" }, name: { eq: "ebb" } }
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
  }
`

const HeaderImage = ({ fluid }) => (
  <Img
    fluid={fluid}
    fadeIn
    className="image-container"
    imgStyle={{
      objectPosition: undefined, // defined in scss
    }}
  />
)

export const EbbHeader = () => (
  <StaticQuery
    query={ebbQuery}
    render={({ headerImage }) => (
      <HeaderImage fluid={headerImage.edges[0].node.childImageSharp.fluid} />
    )}
  />
)
