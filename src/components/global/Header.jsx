import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./header.scss"

const Header = ({ blog }) => {
  const data = useStaticQuery(graphql`
    {
      logo: allFile(filter: { name: { eq: "genau-logo" } }) {
        nodes {
          childImageSharp {
            fixed(quality: 100, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div className="g-header">
      <div className="g-header__logo">
        <Link
          className="genau-logo"
          to="/"
          style={{
            color: "inherit",
            fontSize: "inherit",
            textDecoration: "none",
            padding: 0,
          }}
        >
          <Img
            fixed={data.logo.nodes[0].childImageSharp.fixed}
            alt="genau dance co."
          />
        </Link>
      </div>
      {blog && <div className="g-header__blog">Blog</div>}
    </div>
  )
}

export default Header
