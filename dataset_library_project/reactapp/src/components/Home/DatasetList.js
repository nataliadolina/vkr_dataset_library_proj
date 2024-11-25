import React from 'react';
import DatasetCard from './DatasetCard';
import styles from './DatasetList.module.css';
import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getDatasets} from '../../actions/dataActions';

const DatasetList = () => {
  
  const datasetsList = useSelector(state => state.datasets.datasetsList);
  const activeStatuses = useSelector(state => state.statuses.activeStatuses); 

  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(getDatasets(activeStatuses, []));
  }, [dispatch, activeStatuses])

  return (
    <section className={styles.datasetList}>
      {datasetsList.map((dataset) => (
        <DatasetCard image={`${dataset.image}`} name={dataset.name}
         description={dataset.description} status={dataset.status_name} substatuses={dataset.substatus_name}/>
      ))}
    </section>
  );
};

export default DatasetList;