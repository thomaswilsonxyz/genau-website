import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Layout, SEO, BackArrow } from "../index"
import "../../styles/show-page.scss"

const getHeaderFluid = headerImage =>
  headerImage.edges[0].node.childImageSharp.fluid

const ImageGallery = ({ imageNodes }) => {
  console.log(imageNodes)
  return (
    <div className="image-gallery">
      <div className="image-gallery__container">
        {imageNodes.map(({ node }) => {
          const { id, childImageSharp } = node
          return (
            <Img
              key={id}
              className="image-gallery__image"
              fixed={childImageSharp.fixed}
              style={{ height: 195 }}
            />
          )
        })}
      </div>
    </div>
  )
}

ImageGallery.propTypes = {
  imageNodes: PropTypes.array.isRequired,
}

const ShowLayout = ({
  title,
  location,
  date,
  headerImage,
  galleryImageNodes,
  bodyHtml,
}) => (
  <Layout>
    <SEO
      title="Kreislauf"
      keywords={["genau", "kreislauf", "dance", "london"]}
    />
    <div className="show-header">
      <Img
        fluid={getHeaderFluid(headerImage)}
        fadeIn
        className="image-container"
        imgStyle={{
          objectPosition: undefined, // defined in scss
        }}
      />
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
      <div
        className="text__body"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </section>
    <section>
      <ImageGallery imageNodes={galleryImageNodes} />
    </section>
  </Layout>
)

ShowLayout.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  headerImage: PropTypes.object.isRequired,
  bodyText: PropTypes.element.isRequired,
  galleryImageNodes: PropTypes.array.isRequired,
}

export default ShowLayout
