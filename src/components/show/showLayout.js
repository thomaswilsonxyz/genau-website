import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Layout, SEO, BackArrow } from "../index"
import "../../styles/show-page.scss"

const ShowLayout = ({
  title,
  location,
  date,
  Header,
  ImageGallery,
  bodyText,
}) => (
  <Layout>
    <SEO
      title="Kreislauf"
      keywords={["genau", "kreislauf", "dance", "london"]}
    />
    <div className="show-header">
      <Header />
      <h1 className="show-header__title">{title}</h1>
      <h2 className="show-header__subtitle">{location}</h2>
      <h2 className="show-header__subtitle">{date}</h2>
    </div>
    <div className="back-icon">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="back-icon__container">
          <span className="back-icon__icon">
            <BackArrow />
          </span>
          <span className="back-icon__text">Back Home</span>
        </div>
      </Link>
    </div>
    <section className="text">
      <div className="text__body">{bodyText}</div>
    </section>
    <section>
      <ImageGallery />
    </section>
  </Layout>
)

ShowLayout.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  Header: PropTypes.any.isRequired,
  bodyText: PropTypes.element.isRequired,
  ImageGallery: PropTypes.node.isRequired,
}

export default ShowLayout
