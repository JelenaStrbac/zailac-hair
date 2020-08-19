import React from "react"

import styles from "./TableRow.module.css"

const TableRow = props => {
  return (
    <tr className={styles.tr}>
      <td>{props.description}</td>
      <td>{props.duration}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default TableRow
