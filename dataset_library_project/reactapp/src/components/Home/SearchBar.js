import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9d41ab7d11bb740225e0e3149203face0ecd40908bfcad8381925adb8f529d?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290" 
          alt="" 
          className={styles.searchIcon} 
        />
        <label htmlFor="searchInput" className={styles['visually-hidden']}>Search</label>
        <input 
          type="text" 
          id="searchInput"
          className={styles.searchValue} 
          placeholder="Search" 
          aria-label="Search"
        />
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12d35a344a22193abbd6967323e06681ded55706ceaed5c38ea31dce6653538?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290" 
          alt="Search options" 
          className={styles.optionsIcon} 
        />
      </div>
    </form>
  );
}

export default SearchBar;