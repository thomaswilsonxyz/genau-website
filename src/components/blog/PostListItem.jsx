import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "./PostListItem.scss"

const PostListItem = ({
  linkUrl,
  fixedImage,
  title,
  date,
  author,
  preview,
}) => (
  <li className="post--li">
    <Link to={linkUrl} className="post">
      <div className="post__image">
        <Img fixed={fixedImage} alt="Blog post" />
      </div>
      <div className="post__text">
        <div className="post__text__header">
          <div className="post__text__header__title">{title}</div>
          <div className="post__text__header__date">{date}</div>
        </div>
        <div className="post__text__author">{author}</div>
        <div className="post__text__preview">{preview}</div>
      </div>
    </Link>
  </li>
)

PostListItem.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  fixedImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
}

export default PostListItem
