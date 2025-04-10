import React from 'react'
import questionMark from '../assets/questionmark.png'
import styles from '../css/Card.module.css'

const Card = ({ title, choice, type, result, isPlaying, count }) => {
  const getResultClass = () => {
    if (result === '이겼다') return styles.win
    if (result === '졌다') return styles.lose
    return ''
  }

  const content = () => {
    if (isPlaying && count > 0) {
      return (
        <>
          <div className={styles.count}>{count}</div>
          <p>카운트다운</p>
        </>
      )
    }

    if (choice) {
      return (
        <>
          <img src={choice.imgUrl} alt={choice.type} />
          <p>{result}</p>
        </>
      )
    }

    return (
      <>
        <img src={questionMark} alt="?" />
        <p>선택하세요</p>
      </>
    )
  }

  return (
    <div className={`${styles.card} ${styles[type]} ${getResultClass()}`}>
      <h2>{title}</h2>
      {content()}
    </div>
  )
}

export default Card
