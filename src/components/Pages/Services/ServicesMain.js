import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"

import styles from "./ServicesMain.module.css"
import Headings from "../../UI/Headings/Headings"
import OfferCard from "../../UI/OfferCards/OfferCard"
import ServicesImg from "../../../images/services_hair.png"

const ServicesMain = props => {
  const data = useStaticQuery(graphql`
    query {
      cenovnik: wordpressPage(title: { eq: "Cenovnik" }) {
        content
      }
      spOne: wordpressPage(title: { eq: "SP1" }) {
        content
      }
      spTwo: wordpressPage(title: { eq: "SP2" }) {
        content
      }
      spThree: wordpressPage(title: { eq: "SP3" }) {
        content
      }
      telefon: wordpressPage(title: { eq: "Telefon" }) {
        content
      }
    }
  `)
  return (
    <div className={styles.serviceMain}>
      <Fade up>
        <div className={styles.serviceSpecialOffersContainer}>
          <Headings>Specijalne ponude</Headings>
          <div className={styles.serviceSpecialOffers}>
            <OfferCard
              color="#f2efeb"
              colorTwo="#9b8465"
              image="specialOfferOne.jpg"
              content={data.spOne.content}
              phone={data.telefon.content}
            />
            <OfferCard
              color="#C0C0C0"
              colorTwo="#858585"
              image="specialOfferTwo.jpg"
              content={data.spTwo.content}
              phone={data.telefon.content}
            />
            <OfferCard
              color="#dcc29c"
              colorTwo="#bd8c44"
              image="specialOfferThree.jpg"
              content={data.spThree.content}
              phone={data.telefon.content}
            />
          </div>
        </div>
      </Fade>
      <div className={styles.servicesPriceListContainer}>
        <Headings>Cenovnik</Headings>
        <div dangerouslySetInnerHTML={{ __html: data.cenovnik.content }} />
      </div>
      <div className={styles.servicesImg}>
        <img src={ServicesImg} alt="hair" />
      </div>
    </div>
  )
}

export default ServicesMain
