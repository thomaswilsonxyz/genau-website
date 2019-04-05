import React from "react"
import Proptypes from "prop-types"
import { graphql } from "gatsby"

import "./CompanyMember.css"

export const query = graphql`
  query {
    file(relativePath: { eq: "src/images/headshots/maika.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const CompanyMember = ({ data, name, role, imageUrl }) => {
  console.log(query)
  return (
    <div className="company-member">
      <img src={query.file} alt="headshot" />
      <p className="member__name">{name}</p>
      <p className="member__role">{role}</p>
    </div>
  )
}

CompanyMember.propTypes = {
  name: Proptypes.string.isRequired,
  role: Proptypes.string.isRequired,
  imageUrl: Proptypes.string.isRequired,
}

export default CompanyMember
