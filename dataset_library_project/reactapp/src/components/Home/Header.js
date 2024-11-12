import React from 'react';
import ButtonGroup from './ButtonGroup';
import UserProfile from './UserProfile';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ButtonGroup />
      <UserProfile />
    </header>
  );
};

export default Header;