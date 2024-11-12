import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import StateBar from './StateBar';
import DatasetList from './DatasetList';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <main className={styles.dashboard}>
      <Header />
      <SearchBar />
      <StateBar />
      <DatasetList />
    </main>
  );
};

export default Dashboard;