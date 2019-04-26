import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

import "./ImageGalleries.scss"

const fixedImagesFromEdges = edges => {
  return edges.map(({ node }) => {
    const { childImageSharp } = node
    const { fixed } = childImageSharp
    return fixed
  })
}

const ImageGallery = ({ fixedImages }) => (
  <div className="image-gallery">
    <div className="image-gallery__container">
      {fixedImages.map(fixed => (
        <Img
          className="image-gallery__image"
          fixed={fixed}
          style={{ height: 195 }}
        />
      ))}
    </div>
  </div>
)

export const EbbImageGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "shows/ebb" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 195) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ImageGallery fixedImages={fixedImagesFromEdges(data.allFile.edges)} />
    )}
  />
)
