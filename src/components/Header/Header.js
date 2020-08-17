import React from "react"
import { Link } from "gatsby"
import { globalHistory as history } from "@reach/router"
// import PropTypes from "prop-types"

import styles from "./Header.module.css"
import LogoBlack from "../../images/logoBlack.png"
import LogoWhite from "../../images/logo.png"

const Header = props => {
  const { location } = history
  const path = location.pathname
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={path === "/" ? LogoBlack : LogoWhite}
        alt="zailac-hair-logo"
      />
      <div className={styles.headerLinks}>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          to="/"
        >
          Početna
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          to="/about/"
        >
          O nama
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          to="/services/"
        >
          Usluge
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          to="/gallery/"
        >
          Galerija
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          to="/blog/"
        >
          Blog
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          to="/contact/"
        >
          Kontakt
        </Link>
      </div>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
