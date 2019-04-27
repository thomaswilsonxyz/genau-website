import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./TrilogyTile.scss"

const TrilogyTile = ({ imageFluid, name, date, linkUrl }) => {
  return (
    <Link to={linkUrl}>
      <div className="trilogy-tile">
        <Img fluid={imageFluid} className="trilogy-tile__image" />
        <div className="trilogy-tile__text">
          <h2 className="trilogy__show__title">{name}</h2>
          <p className="trilogy__show__date">{date}</p>
        </div>
      </div>
    </Link>
  )
}

TrilogyTile.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  imageFluid: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default TrilogyTile
