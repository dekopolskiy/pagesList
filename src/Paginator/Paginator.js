import React, { useState } from 'react';
import styles from './Paginator.module.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Paginator = ({ allUsers, usersOnPage }) => {
  //1.calculate all pages, create array of pages
  let allPages = Math.ceil(allUsers / usersOnPage);
  let everyPage = [];
  for (let i = 1; i <= allPages; i++) {
    everyPage.push(i);
  }
  //2.leftParam and rigtParam for array.slice(left, right) for show portion pages
  let [leftOrRight, setleftOrRight] = useState({ l: 0, r: 10 });
  //3.setState() and rerender Paginator
  let moveRightOrLeft = (step) => {
    setleftOrRight({ l: leftOrRight.l + step, r: leftOrRight.r + step })
  }

  return (
    <div>{/*hide left button if left == 0 OR create button disabled*/}
      <div className={styles.main}>
        {leftOrRight.l == 0 ? <FaChevronLeft className={styles.chevron}/> : <FaChevronLeft className={styles.chevron} onClick={() => moveRightOrLeft(-10)} />}

        {/*Чтобы не перебирать целиком, копируем только необходимую часть при помощи хука  */}
        {everyPage
          .slice(leftOrRight.l, leftOrRight.r)
          .map((i) => <div>{i}</div>)}
        {leftOrRight.r >= allPages ? <FaChevronRight className={styles.chevron}/> : <FaChevronRight className={styles.chevron} onClick={() => moveRightOrLeft(10)} />}

      </div>
      {/*hide right button if right == allPages OR create button disabled*/}
    </div>
  )
}


export default Paginator;


