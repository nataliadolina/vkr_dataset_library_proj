import React from 'react';
import styles from './DatasetCard.module.css';

const DatasetCard = ({ image, name, description, status, substatuses }) => {
  return (
    <div className={styles.datasetCard}>
      <img src={image} alt="" className={styles.datasetImage} />
      <div className={styles.datasetBody}>
        <p className={styles.datasetTitle}>{name}</p>
        <p className={styles.description}>{description.slice(0, 84) + "..."}</p>
        <div className={styles.tagGroup}>
          <span className={styles.tag}>{status}</span>
          {substatuses.map((substatus) => (
            <span className={styles.tag}>{substatus}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatasetCard;