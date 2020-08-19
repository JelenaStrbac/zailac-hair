import React from "react"

import styles from "./ContactMain.module.css"
import Headings from "../../UI/Headings/Headings"
import Form from "./Form"

const ContactMain = props => {
  return (
    <div className={styles.contactMain}>
      <Headings>Kontakt</Headings>
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerLeft}>
          <div className={styles.contactData}>
            <div className={styles.contactDataItem}>
              <h4>Adresa</h4>
              <div>Bulevar Kralja Aleksandra 171, lokal 38</div>
              <div>11000, Zvezdara, Beograd</div>
            </div>
            <div className={styles.contactDataItem}>
              <h4>Kontakt podaci</h4>
              <div>zailacmladen480@gmail.com</div>
              <div>+381 60 3230 250</div>
            </div>
            <div className={styles.contactDataItem}>
              <h4>Radno vreme</h4>
              <div>pon - petak: 12h - 20h</div>
              <div>sub: 11h - 18h</div>
              <div>ned: neradna</div>
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
            //   tabIndex="0"
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
