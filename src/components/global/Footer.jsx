import React from "react"

import "./Footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="copyright">
      © genau dance co. {new Date().getFullYear()}
    </div>
    <div className="author">
      Website by <a href="https://www.tinyfox.studio">tinyfox studio</a>
    </div>
  </footer>
)

export default Footer
