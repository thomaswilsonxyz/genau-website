import React from "react"
import CompanyMember from "./CompanyMember"
import PropTypes from "prop-types"

import "./index.scss"

const getImageFixedForHeadshot = (fileName, edges) =>
  edges
    .filter(({ node }) => node.name === fileName)
    .map(({ node }) => node.childImageSharp)[0]

const CompanyMembers = ({ members, headshots }) => {
  const { edges } = headshots

  return (
    <div className="headshots">
      {members.map(({ name, role, fileName }) => {
        return (
          <CompanyMember
            key={name}
            name={name}
            role={role}
            childImageSharp={getImageFixedForHeadshot(fileName, edges)}
          />
        )
      })}
    </div>
  )
}

CompanyMembers.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
    })
  ),
  headshots: PropTypes.object.isRequired,
}

export default CompanyMembers
