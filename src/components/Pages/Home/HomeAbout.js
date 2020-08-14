import React from "react"

import styles from "./HomeAbout.module.css"
import Tools from "../../../images/tools.png"
import Button from "../../UI/Button/Button"

const HomeAbout = props => {
  return (
    <div className={styles.about}>
      <div className={styles.homeAboutLeft}>
        <h1>O nama</h1>
        <div className={styles.homeAboutMain}>
          <h2>O nama</h2>
          <p>
            ZAILAC HAIR je osnovan pre vise od dve godine, a danas
            pretenduje da postane jedan od veoma uspešnih i prepoznatih salona u
            Beogradu koji se bavi koloringom kose. Sam salon je otvoren pre
            svega za one koje odlikuje moderan i urbani stil, a koji žele
            istovremeno i lepu i negovanu kosu. <br></br>U ZAILAC HAIR-u se
            možete odmoriti od svakodnevih obaveza i prepustiti čarobnim rukama
            njegovog osnivača i glavnog frizera, Mladena.
          </p>
          <Button>Saznajte više</Button>
        </div>
      </div>
      <img src={Tools} alt="hairdresser-tools" />
    </div>
  )
}

export default HomeAbout
