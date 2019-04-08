import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./TrilogyTile.scss"

const BackgroundImage = styled.div`
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
`

const TrilogyTile = ({ imageUrl, name, date }) => {
  console.log(imageUrl)
  return (
    <BackgroundImage
      className="trilogy__show"
      id="ebb-and-flood"
      src={imageUrl}
    >
      <h2 className="trilogy__show__title">{name}</h2>
      <p className="trilogy__show__date">{date}</p>
    </BackgroundImage>
  )
}

TrilogyTile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default TrilogyTile
