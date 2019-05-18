import React from "react"
import CompanyMember from "./CompanyMember"
import { StaticQuery, graphql } from "gatsby"

import "./index.scss"

const imagesQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "headshots" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            id
            fluid(maxWidth: 150, maxHeight: 150, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const CompanyMembers = () => (
  <StaticQuery
    query={imagesQuery}
    render={data => {
      return (
        <div className="headshots">
          {data.allFile.edges.map(({ node }) => {
            const { id, name, childImageSharp } = node
            return (
              <CompanyMember
                key={id}
                fileName={name}
                childImageSharp={childImageSharp}
              />
            )
          })}
        </div>
      )
    }}
  />
)

export default CompanyMembers
