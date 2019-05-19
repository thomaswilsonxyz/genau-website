import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import { Layout } from "../../components"

const BlogPostTemplate = ({ imgFixed, title, author, date, children }) => (
  <Layout blog>
    <div className="post-header">
      <div className="post-header__post">
        <div className="post-header__post__image">
          <Img className="post-header__post__image__img" fixed={imgFixed} />
        </div>
        <div className="post-header__post__text">
          <div className="post-header__post__text__title">{title}</div>
          <div className="post-header__post__text__author">{author}</div>
          <div className="post-header__post__text__date">{date}</div>
        </div>
      </div>
    </div>
    <div className="header__colour-stripe" />

    <section className="blog-post">
      <div className="blog-post__content">{children}</div>
    </section>
  </Layout>
)

BlogPostTemplate.propTypes = {
  imgFixed: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}

export default BlogPostTemplate
