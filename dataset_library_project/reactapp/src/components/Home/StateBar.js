import React, { act } from 'react';
import TagToggle from './TagToggle';
import styles from './StateBar.module.css';
import {API_URL_STATUSES} from "./../../index";
import axios from "axios";
import {useEffect, useState} from "react";

const StateBar = () => {
  const [tags, setTags] = useState([])

  const getTags = () => {
    axios.get(API_URL_STATUSES).then(function(response) {
        setTags(response.data)
        
      }).catch((err) => {
        console.log(err)
    });
  }

  const resetState = () => {
    getTags();
  }

  useEffect(() => {
    getTags()
  })

  const [activeTags, setActiveTags] = useState([])

  const handleActiveTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(item => item !== tag)); 
    } else {
      setActiveTags([...activeTags, tag]);
    }
  }

  return (
    <section className={styles.stateBar}>
      <div className={styles.tagToggleGroup}>
        {tags.map((tag, index) => (
          <TagToggle key={index} text={tag.name} active={activeTags.includes(tag.name)} clickCallback={handleActiveTag}/>
        ))}
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f90ca0fcac91c8270958a8a5a73c1af64c3eddd9550c6b3d04e24b2b9ced2954?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290" alt="" className={styles.settingsIcon} />
    </section>
  );
};

export default StateBar;