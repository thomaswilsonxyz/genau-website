import React from "react"
import Proptypes from "prop-types"

import "./SocialMediaPlatform.scss"

const SocialMediaPlatform = ({ name, handle, icon, url }) => (
  <div className="platform" id={name}>
    <div className="platform-details__icon">{icon}</div>
    <div className="platform-details">
      <div>
        <h3 className="platform-details__name">{name}</h3>
        <a href={url} className="platform-details__handle">
          {handle}
        </a>
      </div>
    </div>
  </div>
)

SocialMediaPlatform.propTypes = {
  name: Proptypes.string.isRequired,
  icon: Proptypes.any.isRequired,
  handle: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
}

export default SocialMediaPlatform
