import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledImg = styled.img`
  width: 100%;
  max-height: 300px;
  margin-bottom: 0;
  padding-bottom: 0;
`

const HeroImage = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />
}

HeroImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default HeroImage
