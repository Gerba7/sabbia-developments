'use client'

import Image from 'next/image';
import styles from './card.module.css';
import { useState } from 'react';



const Card = ({img, title, description}) => {

  const [descriptionView, setDescriptionView] = useState(false);
  

  return (
      <div className={styles.card} onClick={() => setDescriptionView(!descriptionView)}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={img} alt='Proyecto' />
        </div>
        <div className={styles.descriptionContainer}>
          <h4 className={`${styles.title} ${descriptionView ? styles.hidden : styles.visible}`}>{title}</h4>
          <p className={`${styles.description} ${descriptionView ? styles.visible : styles.hidden}`}>{description}</p>
        </div>

      </div>
  )
}

export default Card
