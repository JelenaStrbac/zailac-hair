import React from "react"
import { stack as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import "./Sidebar.css"

const Sidebar = props => {
  // const [headerColor, setHeaderColor] = useState("white")

  // const { location } = history
  // const path = location.pathname
  // const height = path === "/" ? window.innerHeight : 250
  // // console.log(height)
  // const listenScrollEvent = () => {
  //   window.scrollY > height ? setHeaderColor("#555") : setHeaderColor("white")
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent)
  // })

  // const styles = {
  //   bmBurgerBars: {
  //     background: headerColor,
  //   },
  // }
  return (
    // <Menu {...props} styles={styles}>
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
