import React from "react"

import styles from "./ServicesMain.module.css"
import Headings from "../../UI/Headings/Headings"
import OfferCard from "../../UI/OfferCards/OfferCard"
import Table from "../../UI/Table/Table"
import TableRow from "../../UI/Table/TableRow"

const ServicesMain = props => {
  return (
    <div className={styles.serviceMain}>
      <div className={styles.serviceSpecialOffersContainer}>
        <Headings>Specijalne ponude</Headings>
        <div className={styles.serviceSpecialOffers}>
          <OfferCard
            color="#f2efeb"
            colorTwo="#9b8465"
            image="coloring.jpg"
            title="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="RSD 5.200"
          />
          <OfferCard
            color="#C0C0C0"
            colorTwo="#858585"
            image="balayage.jpg"
            title="CADIVEU Keratinsko ispravljanje kose + žensko šišanje - sve dužine"
            duration="180 min"
            price="RSD 7.500"
          />
          <OfferCard
            color="#dcc29c"
            colorTwo="#bd8c44"
            image="stilizovanje.jpg"
            title="Balayage / pramenovi + šišanje + feniranje + gratis tretman prowermix Loreal - ekstra duga kosa"
            duration="240 min"
            price="RSD 10.699"
          />
        </div>
      </div>
      <div className={styles.servicesPriceListContainer}>
        <Headings>Cenovnik</Headings>
        <Table headTitle="Pramenovi i preliv kose Loreal">
          <TableRow
            description="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="5.200"
          />
          <TableRow
            description="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="5.200"
          />
          <TableRow
            description="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="5.200"
          />
        </Table>
        <Table headTitle="Pramenovi i preliv kose Loreal">
          <TableRow
            description="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="5.200"
          />
          <TableRow
            description="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="5.200"
          />
          <TableRow
            description="Balayage / pramenovi Echosline + žensko šišanje + feniranje + olaplex za negu - sve dužine kose"
            duration="240 min"
            price="5.200"
          />
        </Table>
      </div>
    </div>
  )
}

export default ServicesMain