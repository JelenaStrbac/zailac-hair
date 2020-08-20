import React from "react"
import { Link } from "gatsby"

import styles from "./Footer.module.css"
import Logo from "../../images/logo.png"
import zailacFB from "../../images/social-facebook-icon.svg"
import zailacIG from "../../images/social-instagram-icon.svg"

const Footer = props => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <div className={styles.border}></div>
          <img className={styles.logo} src={Logo} alt="zailac-hair-logo" />
          <div className={styles.border}></div>
        </div>

        <div className={styles.footerInnerMain}>
          <div className={styles.footerLinks}>
            <Link to="/about/">O NAMA</Link>
            <Link to="/services/">USLUGE I CENOVNIK</Link>
            <Link to="/gallery/">GALERIJA</Link>
            <Link to="/blog/">BLOG</Link>
            <Link to="/contact/">KONTAKT</Link>
          </div>
          <div className={styles.social}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/pages/category/Hair-Salon/Zailac-Hair-823673054501131/"
            >
              <img className="facebook" src={zailacFB} alt="zailac-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/zailachair/?hl=en"
            >
              <img className="instagram" src={zailacIG} alt="zailac-ig" />
            </a>
          </div>
          <div className={styles.footerContactData}>
            <div className={styles.footerContactDataInner}>
              <div className={styles.footerContactDataTitle}>RADNO VREME</div>
              <div>pon - petak: 12h - 20h</div>
              <div>sub: 11h - 18h</div>
            </div>
            <div className={styles.footerContactDataInner}>
              <div className={styles.footerContactDataTitle}>KONTAKT</div>
              <div>
                email:{" "}
                <a href="mailto:zailacmladen480@gmail.com">
                  zailacmladen480@gmail.com
                </a>
                <br></br>
                tel: +381 60 3230 250
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyrights}>
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer
