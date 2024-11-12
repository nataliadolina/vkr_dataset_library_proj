import React from 'react';
import styles from './TagToggle.module.css';


const TagToggle = ({ text, active, clickCallback }) => {
  return (
    <div class={styles.tagToggleBar}>
    <button onClick={clickCallback.bind(this, text)} className={`${styles.tagToggle} ${active ? styles.active : ''}`}>
      {active && <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a39851672d4d4076f042be77c22ae257892a79c299bb929cf8b277dbe94ba5?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290" alt="" className={styles.icon} />}
      <span>{text}</span>
    </button>
    </div>
  );
};

export default TagToggle;