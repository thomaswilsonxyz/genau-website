import React from "react"
import Proptypes from "prop-types"

import "./CompanyMember.scss"

const CompanyMember = ({ name, role, fileName }) => {
  return (
    <div className="member">
      <img src={"file.png"} alt="headshot" />
      <p className="member__name">{name}</p>
      <p className="member__role">{role}</p>
    </div>
  )
}

CompanyMember.propTypes = {
  name: Proptypes.string.isRequired,
  role: Proptypes.string.isRequired,
  fileName: Proptypes.any,
}

export default CompanyMember
