import React from "react"

import styles from "./OfferCard.module.css"

const OfferCard = props => {
  return (
    <div className={styles.card}>
      <div className={styles.card__side__front}>
        <div
          className={styles.offerCardImage}
          style={{
            backgroundImage: `linear-gradient(to left top, ${props.color}, ${props.colorTwo}), url("/${props.image}")`,
          }}
        >
          {/* <img src={props.image} alt="zailacBlogSpecialOffer" /> */}
        </div>
        <div className={styles.offerCardText}>
          <h4>{props.title}</h4>
          <div>
            <p>{props.duration}</p>
            <div>{props.price}</div>
          </div>
        </div>
      </div>
      <div
        className={(styles.card__side, styles.card__side__back)}
        style={{
          backgroundImage: `linear-gradient(to right bottom, ${props.color}, ${props.colorTwo})`,
        }}
      >
        <div className={styles.card_cta}>
          <p>
            Rezervacija na <br></br>060 3230 250
          </p>
          <p>vaš Zailac Hair</p>
        </div>
      </div>
    </div>
  )
}

export default OfferCard
