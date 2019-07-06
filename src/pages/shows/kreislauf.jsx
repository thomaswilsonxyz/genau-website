import React from "react"
import PropTypes from "prop-types"

import ShowLayout from "../../components/show/showLayout"
import { graphql } from "gatsby"

export const query = graphql`
  query KreislaufPageQuery {
    headerImage: allFile(
      filter: {
        sourceInstanceName: { eq: "trilogy" }
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
      filter: {
        sourceInstanceName: { eq: "showImages" }
        relativeDirectory: { eq: "kreislauf" }
      }
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

function Kreislauf({ data }) {
  return (
    <ShowLayout
      title={data.showHtml.frontmatter.title}
      date={data.showHtml.frontmatter.date}
      location={data.showHtml.frontmatter.location}
      headerImage={data.headerImage}
      headerImageClass="kreislauf-header"
      galleryImageNodes={data.galleryImages.edges}
      bodyHtml={data.showHtml.html}
      vimeoUrls={["https://player.vimeo.com/video/345326075"]}
    />
  )
}

Kreislauf.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Kreislauf
