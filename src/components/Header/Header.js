import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from "./Header.module.css"
import Logo from "../../images/logoBlack.png"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
    // style={{
    //   background: `rebeccapurple`,
    // }}
  >
    <img className={styles.logo} src={Logo} alt="zailac-hair-logo" />
    <div className={styles.headerLinks}>
      <Link className={styles.headerLink} to="/">
        Početna
      </Link>
      <Link className={styles.headerLink} to="/about/">
        O nama
      </Link>
      <Link className={styles.headerLink} to="/services/">
        Usluge
      </Link>
      <Link className={styles.headerLink} to="/gallery/">
        Galerija
      </Link>
      <Link className={styles.headerLink} to="/blog/">
        Blog
      </Link>
      <Link className={styles.headerLink} to="/contact/">
        Kontakt
      </Link>
    </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
