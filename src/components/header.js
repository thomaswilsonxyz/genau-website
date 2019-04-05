import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { black } from "../styles/colours"
import { padding } from "../styles/paddings"
import { TEXT_SIZE_5 } from "../styles/typography"
import "./header.css"

const Navbar = styled.header`
  display: flex;
  width: 100vw;
  position: sticky;
  background-color: white;
  color: ${black};
  padding-left: ${padding(1)};
  padding-right: ${padding(1)};
  margin-top: ${padding(1)};
`

const Header = () => (
  <Navbar>
    <Link
      className="genau-logo"
      to="/"
      style={{
        fontSize: TEXT_SIZE_5,
        color: black,
        textDecoration: "none",
      }}
    >
      genau dance co
    </Link>
  </Navbar>
)

export default Header
