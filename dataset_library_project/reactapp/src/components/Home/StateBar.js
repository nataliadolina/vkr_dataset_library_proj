import React, { act } from 'react';
import TagToggle from './TagToggle';
import styles from './StateBar.module.css';
import setActiveStatus from '../../actions/actionCreators';
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getStatuses} from '../../actions/dataActions';

const StateBar = () => {
  const statuses = useSelector(state => state.statuses.statusList);
  const activeStatuses = useSelector(state => state.statuses.activeStatuses)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatuses());
  }, [])

  return (
    <section className={styles.stateBar}>
      <div className={styles.tagToggleGroup}>
        {statuses.map((tag, index) => (
          <TagToggle key={index} text={tag.name} active={activeStatuses.includes(tag.name)}/>
        ))}
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f90ca0fcac91c8270958a8a5a73c1af64c3eddd9550c6b3d04e24b2b9ced2954?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290" alt="" className={styles.settingsIcon} />
    </section>
  );
};

export default StateBar;