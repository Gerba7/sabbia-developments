'use client'

import Image from 'next/image';
import styles from './card.module.css';
import { useState } from 'react';
import BasicModal from '../../../Common/Modal/Modal';



const Card = ({img, title, description, project}) => {

  const [descriptionView, setDescriptionView] = useState(false);
  

  return (
      <div className={styles.card} onClick={() => setDescriptionView(!descriptionView)}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={project.img[0]} alt='Proyecto' />
        </div>
        <BasicModal 
          project={project}
          content={
              <div className={styles.descriptionContainer}>
                  <h4 className={`${styles.title}`}>{project?.title}</h4>
              </div>
          }
        />

      </div>
  )
}

export default Card
