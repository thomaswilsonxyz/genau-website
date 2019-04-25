import React from "react"
import PropTypes from "prop-types"

import { Layout, SEO, BackArrow } from "../index"

import "../../styles/show-page.scss"

const ShowLayout = ({ title, location, date, bodyText }) => (
  <Layout>
    <SEO
      title="Kreislauf"
      keywords={["genau", "kreislauf", "dance", "london"]}
    />
    <div className="header">
      <div className="header__image">Header image</div>
      <h1 className="header__title">{title}</h1>
      <h2 className="header__subtitle">{location}</h2>
      <h2 className="header__subtitle">{date}</h2>
    </div>

    <div className="back-icon">
      <div className="back-icon__container">
        <span className="back-icon__icon">
          <BackArrow />
        </span>
        <span className="back-icon__text">Back Home</span>
      </div>
    </div>
    <section className="text">
      <div className="text__body">{bodyText}</div>
    </section>

    <section className="image-gallery">
      <div className="image-gallery__container">
        <div className="image-gallery__image">Image 1</div>
        <div className="image-gallery__image">Image 2</div>
        <div className="image-gallery__image">Image 3</div>
        <div className="image-gallery__image">Image 4</div>
        <div className="image-gallery__image">Image 5</div>
        <div className="image-gallery__image">Image 6</div>
      </div>
    </section>
  </Layout>
)

ShowLayout.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  bodyText: PropTypes.element.isRequired,
}

export default ShowLayout
