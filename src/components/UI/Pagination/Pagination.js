import React from "react"
import ReactPaginate from "react-paginate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./Pagination.module.css"

const Pagination = props => {
  return (
    <div className={styles.Pagination}>
      <ReactPaginate
        previousLabel={
          <FontAwesomeIcon icon={faAngleDoubleLeft} className={styles.icon} />
        }
        nextLabel={
          <FontAwesomeIcon icon={faAngleDoubleRight} className={styles.icon} />
        }
        breakLabel={"..."}
        // breakClassName={styles.break - me}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.handlePageClick}
        containerClassName={styles.pagination}
        subContainerClassName={(styles.pages, styles.pagination)}
        // subContainerClassName={"pages pagination"}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </div>
  )
}

export default Pagination
