import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import "./CompanyMember.scss"

const CompanyMember = ({ name, role, childImageSharp }) => {
  return (
    <div className="member">
      <Img
        fluid={childImageSharp.fixed}
        className="member__image"
        alt="headshot"
      />
      <p className="member__name">{name}</p>
      <p className="member__role">{role}</p>
    </div>
  )
}

CompanyMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  childImageSharp: PropTypes.object.isRequired,
}

export default CompanyMember
