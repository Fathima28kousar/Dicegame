import React from 'react'
import styles from './Rules.module.css'

const Rules = () => {
  return (
    <div className={styles.rules}>
      <h2>How to Play dice game</h2>
      <div className={styles.text}>
      <p>1.Select any number</p>
        <p>2.Click on dice image</p>
        <p>
          3.After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>4.If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  )
}

export default Rules
