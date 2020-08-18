import React from "react"

import styles from "./Table.module.css"

const Table = props => {
  return (
    <table className={styles.table}>
      <thead>
        <th>{props.headTitle}</th>
        <th>Trajanje</th>
        <th>Cena</th>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  )
}

export default Table
