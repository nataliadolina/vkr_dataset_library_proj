import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.avatar}>F</div>
      <div className={styles.info}>
        <p className={styles.name}>Иван Иванов</p>
        <p className={styles.role}>Аналитик</p>
      </div>
    </div>
  );
};

export default UserProfile;