import React from 'react'
import styles from '../css/Button.module.css'

const Button = ({ name, imgUrl, type, onClick, disabled }) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${type}`]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </button>
  )
}

export default Button
