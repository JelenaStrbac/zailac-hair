import React from "react"
import { Link } from "gatsby"
import { globalHistory as history } from "@reach/router"
// import PropTypes from "prop-types"

import styles from "./Header.module.css"
import LogoBlack from "../../images/logo_black.png"
import LogoWhite from "../../images/logo_white.png"

const Header = props => {
  const { location } = history
  const path = location.pathname
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          className={styles.logo}
          src={path === "/" ? LogoBlack : LogoWhite}
          alt="zailac-hair-logo"
        />
      </Link>
      <div className={styles.headerLinks}>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          activeClassName={styles.active}
          to="/"
        >
          Početna
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          activeClassName={styles.active}
          to="/about/"
        >
          O nama
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          activeClassName={styles.active}
          to="/services/"
        >
          Usluge
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          activeClassName={styles.active}
          to="/gallery/"
        >
          Galerija
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          activeClassName={styles.active}
          to="/blog/"
        >
          Blog
        </Link>
        <Link
          className={path === "/" ? styles.headerLink : styles.headerLinkSecond}
          activeClassName={styles.active}
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
