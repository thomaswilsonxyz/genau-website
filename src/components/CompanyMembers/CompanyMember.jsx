import React from "react"
import Proptypes from "prop-types"
import Img from "gatsby-image"

import "./CompanyMember.scss"
import { getMemberDetails } from "../../data/members"

const CompanyMember = ({ fileName, childImageSharp }) => {
  const { name, role } = getMemberDetails(fileName)
  return (
    <div className="member">
      <Img
        fluid={childImageSharp.fluid}
        className="member__image"
        alt="headshot"
      />
      <p className="member__name">{name}</p>
      <p className="member__role">{role}</p>
    </div>
  )
}

CompanyMember.propTypes = {
  fileName: Proptypes.string.isRequired,
  childImageSharp: Proptypes.object.isRequired,
}

export default CompanyMember
