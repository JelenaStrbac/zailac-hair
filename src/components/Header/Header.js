import React, { useEffect, useState, useRef } from "react"
import { globalHistory as history } from "@reach/router"
import classNames from "classnames"

import styles from "./Header.module.css"
import "./HeaderSticky.css"
import LogoBlack from "../../images/logo_black.png"
import LogoWhite from "../../images/logo_white.png"
import FadeLink from "../UI/FadeLink/FadeLink"

const Header = props => {
  const { location } = history
  const path = location.pathname
  const pathRef = useRef(path)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  useEffect(() => {
    const listenScrollEvent = () => {
      const height =
        pathRef.current === "/" ? window.innerHeight : window.innerHeight * 0.4
      setIsHeaderSticky(window.scrollY > height)
    }
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  return (
    <header
      className={classNames(styles.header, {
        stickyHeader: isHeaderSticky,
      })}
    >
      <FadeLink to="/">
        <img
          className={styles.logo}
          src={path === "/" && !isHeaderSticky ? LogoBlack : LogoWhite}
          alt="zailac-hair-logo"
        />
      </FadeLink>
      <div className={styles.headerLinks}>
        <FadeLink
          className={styles.headerLink}
          activeClass={styles.active}
          to="/"
        >
          Početna
        </FadeLink>
        <FadeLink
          className={styles.headerLink}
          activeClass={styles.active}
          to="/about/"
        >
          O nama
        </FadeLink>
        <FadeLink
          className={styles.headerLink}
          activeClass={styles.active}
          to="/services/"
        >
          Usluge
        </FadeLink>
        <FadeLink
          className={styles.headerLink}
          activeClass={styles.active}
          to="/gallery/"
        >
          Galerija
        </FadeLink>
        <FadeLink
          className={styles.headerLink}
          activeClass={styles.active}
          to="/blog/"
        >
          Blog
        </FadeLink>
        <FadeLink
          className={styles.headerLink}
          activeClass={styles.active}
          to="/contact/"
        >
          Kontakt
        </FadeLink>
      </div>
    </header>
  )
}

export default Header
