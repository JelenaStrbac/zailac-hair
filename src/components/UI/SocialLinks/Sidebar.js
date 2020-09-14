import React from "react"
import { stack as Menu } from "react-burger-menu"

import "./Sidebar.css"
import SocialLinksIcons from "./SocialLinksIcons"
import { Link } from "gatsby"

const Sidebar = props => {
  return (
    <Menu {...props}>
      <Link to="/">Početna</Link>
      <Link to="/about/">O nama</Link>
      <Link to="/services/">Usluge</Link>
      <Link to="/gallery/">Galerija</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Kontakt</Link>
      <SocialLinksIcons name="sidebarSocialLinks" />
    </Menu>
  )
}

export default Sidebar
