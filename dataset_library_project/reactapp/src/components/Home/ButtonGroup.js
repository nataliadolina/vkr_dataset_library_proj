import React from 'react';
import Button from './Button';
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
  const buttons = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/82985fda95b5f6ce1cafa76257199aef29fcdebfbb6bc4373e7ee8a6f16175ec?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', text: 'Загрузить' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6df3c2fdfbb2658ee1f5a73aeea414b1a22ebdc644a492acef01818881ba53d6?placeholderIfAbsent=true&apiKey=61f44cf9345a45009a34f39150f63290', text: 'Создать заявку' }
  ];

  return (
    <div className={styles.buttonGroup}>
      {buttons.map((button, index) => (
        <Button key={index} icon={button.icon} text={button.text} />
      ))}
    </div>
  );
};

export default ButtonGroup;