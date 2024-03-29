import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./Footer.module.css"
import Logo from "../../images/logo_white.png"
import zailacFB from "../../images/social-facebook-icon.svg"
import zailacIG from "../../images/social-instagram-icon.svg"
import { getAnchroFromParsedDOM, removeHtml } from "../../helper/helper"
import FadeLink from "../UI/FadeLink/FadeLink"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      telefon: wordpressPage(title: { eq: "Telefon" }) {
        content
      }
      email: wordpressPage(title: { eq: "Email" }) {
        content
      }
      radnoVreme: wordpressPage(title: { eq: "Radno vreme" }) {
        content
      }
      fb: wordpressPage(title: { eq: "Facebook link" }) {
        content
      }
      ig: wordpressPage(title: { eq: "Instagram link" }) {
        content
      }
    }
  `)
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
            <FadeLink to="/about/">O NAMA</FadeLink>
            <FadeLink to="/services/">USLUGE I CENOVNIK</FadeLink>
            <FadeLink to="/gallery/">GALERIJA</FadeLink>
            <FadeLink to="/blog/">BLOG</FadeLink>
            <FadeLink to="/contact/">KONTAKT</FadeLink>
          </div>
          <div className={styles.social}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={getAnchroFromParsedDOM(data.fb.content)}
            >
              <img className="facebook" src={zailacFB} alt="zailac-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={getAnchroFromParsedDOM(data.ig.content)}
            >
              <img className="instagram" src={zailacIG} alt="zailac-ig" />
            </a>
          </div>
          <div className={styles.footerContactData}>
            <div className={styles.footerContactDataInner}>
              <div className={styles.footerContactDataTitle}>RADNO VREME</div>
              <div
                dangerouslySetInnerHTML={{ __html: data.radnoVreme.content }}
              />
            </div>
            <div className={styles.footerContactDataInner}>
              <div className={styles.footerContactDataTitle}>KONTAKT</div>
              <div>
                email:{" "}
                <a href={`mailto:${removeHtml(data.email.content)}`}>
                  {removeHtml(data.email.content)}
                </a>
                <br></br>
                tel: {removeHtml(data.telefon.content) || "+381 60 3230 250"}
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
