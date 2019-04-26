import { Link } from "gatsby"
import React from "react"

import "./header.scss"

const Header = () => (
  <div className="header">
    <Link
      className="genau-logo"
      to="/"
      style={{
        color: "#22292f",
        fontSize: 18,
        textDecoration: "none",
        padding: 0,
      }}
    >
      genau dance co
    </Link>
  </div>
)

export default Header
