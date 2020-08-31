import React from "react"
import { stack as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import "./Sidebar.css"

const Sidebar = props => {
  return (
    <Menu {...props}>
      <Link to="/">Početna</Link>
      <Link to="/about/">O nama</Link>
      <Link to="/services/">Usluge</Link>
      <Link to="/gallery/">Galerija</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Kontakt</Link>
    </Menu>
  )
}

export default Sidebar
