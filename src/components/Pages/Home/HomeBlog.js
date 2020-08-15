import React from "react"

import styles from "./HomeBlog.module.css"
import Headings from "../../UI/Headings/Headings"
import Button from "../../UI/Button/Button"
import Card from "../../UI/Cards/Card"
import Styling from "../../../images/blog-orange.jpg"

const HomeBlog = props => {
  return (
    <div className={styles.homeBlog}>
      <div className={styles.homeBlogTitle}>
        <Headings>Blog</Headings>
        <Button>Pogledajte sve</Button>
      </div>
      <div className={styles.homeBlogCards}>
        {/* ovde da uradim mapiranje kada izvucem iz wp */}
        <Card
          title="Zdrava i negovana kosa tokom leta"
          image={Styling}
          text="Frizura je jedna od najupečatljivijih formi ekspresije pojedinca koja ide izvan kulturnih, socijalnih i svih drugih granica. Jedinstveni i upečatljiv stil će uvek povezivati ljude, izražavanjem emocija, senzualnosti, i pre svega empatije."
        />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default HomeBlog
