import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { globalHistory as history } from "@reach/router"
import classNames from "classnames"

import styles from "./Header.module.css"
import "./HeaderSticky.css"
import LogoBlack from "../../images/logo_black.png"
import LogoWhite from "../../images/logo_white.png"

const Header = props => {
  const { location } = history
  const path = location.pathname

  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const height = path === "/" ? window.innerHeight : 250

  const listenScrollEvent = () => {
    window.scrollY > height ? setIsHeaderSticky(true) : setIsHeaderSticky(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <header
      className={classNames(styles.header, {
        stickyHeader: isHeaderSticky,
      })}
    >
      <Link to="/">
        <img
          className={styles.logo}
          src={path === "/" && !isHeaderSticky ? LogoBlack : LogoWhite}
          alt="zailac-hair-logo"
        />
      </Link>
      <div className={styles.headerLinks}>
        <Link
          className={styles.headerLink}
          activeClassName={styles.active}
          to="/"
        >
          Početna
        </Link>
        <Link
          className={styles.headerLink}
          activeClassName={styles.active}
          to="/about/"
        >
          O nama
        </Link>
        <Link
          className={styles.headerLink}
          activeClassName={styles.active}
          to="/services/"
        >
          Usluge
        </Link>
        <Link
          className={styles.headerLink}
          activeClassName={styles.active}
          to="/gallery/"
        >
          Galerija
        </Link>
        <Link
          className={styles.headerLink}
          activeClassName={styles.active}
          to="/blog/"
        >
          Blog
        </Link>
        <Link
          className={styles.headerLink}
          activeClassName={styles.active}
          to="/contact/"
        >
          Kontakt
        </Link>
      </div>
    </header>
  )
}

export default Header
