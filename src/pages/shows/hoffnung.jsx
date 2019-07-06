import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import ShowLayout from "../../components/show/showLayout"

export const pageData = graphql`
  query HoffnungPageQuery {
    headerImage: allFile(
      filter: {
        sourceInstanceName: { eq: "trilogy" }
        name: { eq: "hoffnung" }
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
        relativeDirectory: { eq: "hoffnung" }
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

function Hoffnung({ data }) {
  return (
    <ShowLayout
      headerImage={data.headerImage}
      headerImageClass="hoffnung-header"
      bodyHtml={data.showHtml.html}
      date={data.showHtml.frontmatter.date}
      title={data.showHtml.frontmatter.title}
      location={data.showHtml.frontmatter.location}
      galleryImageNodes={[]}
      vimeoUrls={[]}
    />
  )
}

Hoffnung.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hoffnung
