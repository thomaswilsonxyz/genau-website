import React from "react"
import CompanyMember from "./CompanyMember"
import { StaticQuery, graphql } from "gatsby"

import members from "../data/members"
import "./index.scss"

const CompanyMembers = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "headshots" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data.allFile.edges[0].node.name)
      return (
        <div className="headshots">
          {members.map(({ name, role, fileName }) => (
            <CompanyMember key={name} name={name} role={role} fileName={data} />
          ))}
        </div>
      )
    }}
  />
)

export default CompanyMembers
