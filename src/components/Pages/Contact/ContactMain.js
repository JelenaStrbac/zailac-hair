import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./ContactMain.module.css"
import Headings from "../../UI/Headings/Headings"
import Form from "./Form"

const ContactMain = props => {
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
      adresa: wordpressPage(title: { eq: "Adresa" }) {
        content
      }
    }
  `)
  return (
    <div className={styles.contactMain}>
      <Headings>Kontakt</Headings>
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerLeft}>
          <div className={styles.contactData}>
            <div className={styles.contactDataItem}>
              <h3>Adresa</h3>
              <div dangerouslySetInnerHTML={{ __html: data.adresa.content }} />
            </div>
            <div className={styles.contactDataItem}>
              <h3>Kontakt podaci</h3>
              <div dangerouslySetInnerHTML={{ __html: data.email.content }} />
              <div dangerouslySetInnerHTML={{ __html: data.telefon.content }} />
            </div>
            <div className={styles.contactDataItem}>
              <h3>Radno vreme</h3>
              <div
                dangerouslySetInnerHTML={{ __html: data.radnoVreme.content }}
              />
            </div>
          </div>

          <iframe
            title="zailac-google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1318648390425!2d20.491401180134297!3d44.79879940201425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7baa01d6a899%3A0xb33e5e4d82b8063b!2sZailac%20hair!5e0!3m2!1sen!2srs!4v1597869498691!5m2!1sen!2srs"
            width="700"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
          ></iframe>
        </div>

        <div className={styles.form} id="form">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactMain
