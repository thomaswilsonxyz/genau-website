import { Link } from "gatsby"
import React from "react"

import "./header.scss"

const Header = ({ blog }) => (
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
        genau dance co
      </Link>
    </div>
    {blog && <div className="g-header__blog">Blog</div>}
  </div>
)

export default Header
