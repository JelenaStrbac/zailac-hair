import React from "react"

import styles from "./Table.module.css"

const Table = props => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>{props.headTitle}</th>
          <th>Trajanje</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  )
}

export default Table
