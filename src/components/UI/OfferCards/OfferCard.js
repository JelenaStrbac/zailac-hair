import React from "react"

import styles from "./OfferCard.module.css"
import Frame from "../../../images/FrameL.png"

const OfferCard = props => {
  return (
    <div className={styles.card}>
      <div className={styles.card__side__front}>
        <div
          className={styles.offerCardImage}
          style={{
            backgroundImage: `linear-gradient(to left top, ${props.color}, ${props.colorTwo}), url("/${props.image}")`,
          }}
        ></div>
        <div className={styles.offerCardText}>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </div>
      <div
        className={(styles.card__side, styles.card__side__back)}
        style={{
          backgroundImage: `linear-gradient(to right bottom, ${props.color}, ${props.colorTwo})`,
        }}
      >
        <div className={styles.card_cta}>
          <p>Rezervacija na</p>
          <div dangerouslySetInnerHTML={{ __html: props.phone }} />
          <img src={Frame} alt="zailac-frame" className={styles.frame} />
        </div>
      </div>
    </div>
  )
}

export default OfferCard
