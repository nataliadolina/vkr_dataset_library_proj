import React from 'react';
import styles from './Button.module.css';

const Button = ({ icon, text }) => {
  return (
    <button className={styles.button}>
      <img src={icon} alt="" className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;