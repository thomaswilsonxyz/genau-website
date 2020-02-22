import React from "react"
import PropTypes from "prop-types"

import BlogPost from "./BlogPostTemplate"

import "./BlogPostTemplate.scss"
import "../../styles/blog.scss"

const BlogPostTemplateWithPageContext = ({ pageContext }) => {
  console.log(pageContext)
  const post = pageContext.postRemark
  return (
    <BlogPost
      title={post.frontmatter.title}
      author={post.frontmatter.author}
      date={post.frontmatter.date}
      imgFixed={pageContext.postImageFixed}
    >
      <div
        className="blog-post__content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </BlogPost>
  )
}

BlogPostTemplateWithPageContext.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default BlogPostTemplateWithPageContext
