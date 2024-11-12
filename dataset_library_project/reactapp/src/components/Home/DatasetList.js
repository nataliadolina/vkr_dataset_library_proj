import React from 'react';
import DatasetCard from './DatasetCard';
import styles from './DatasetList.module.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {API_URL} from "./../../index";

const DatasetList = () => {
  const datasetImg = [
    { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/57174fa561a481f5a20548e85ee2b11815a72d22fe89107e19f246f996fd53df?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', title: 'Виды роз' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2a75c1dfc0c998b36dcb7121f9c9bcc9f3f5b0331859a3a158e112f7f71899cb?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', title: 'Количество сахара в мармеладках датасет' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28e0b061ac35e91905e6f480bc548373b4f01f72595705b34e72ba0db0c7bef0?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', title: 'Рейтинг стран по количеству катастроф' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8fd3491e250633b04067ffb0f794d8eaef03f7835a82f6e0b8833b92bc1ae4b4?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', title: 'Самый вкусный фрукт по мнению россиян' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/43e0ce4c10b447e12ac2d073a1f4afcc56ee21b669ce4c1872d7ca3ef2f64b5f?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', title: 'Виды астр' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5144a761f8e027fb041e6003205877bf8003dd678403b568706d64e94262fbd7?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', title: 'Животные Африки датасет' }
  ];

  const [datasets, setDatasets] = useState([])

  const getDatasets = () => {
        axios.get(API_URL).then(function(response) {
            setDatasets(response.data)
          }).catch((err) => {
            console.log(err)
        });
    }

  const resetState = () => {
        getDatasets();
    }

    useEffect(() => {
        getDatasets()
    })

  return (
    <section className={styles.datasetList}>
      {datasets.map((dataset, index) => (
        <DatasetCard key={dataset.id} image={datasetImg[index % datasetImg.length].image} name={dataset.name}
         description={dataset.description} status={dataset.status_name} substatuses={dataset.substatus_name}/>
      ))}
    </section>
  );
};

export default DatasetList;