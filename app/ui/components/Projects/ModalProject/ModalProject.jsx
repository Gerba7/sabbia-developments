'use client'

import Image from 'next/image';
import styles from './modalProject.module.css';
import { useEffect, useRef, useState } from 'react';
import BasicModal from '../../Common/Modal/Modal';




const ModalProject = ({project}) => {

    const [isVisible, setVisible] = useState(false);

    const ref = useRef();



    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            setVisible(true);
            }
        },
        { threshold: 0.5 }
        );
        observer.observe(ref.current);

        return () => {
        observer.disconnect();
        };
    }, [project])

    
  return (
    <div className={`${styles.gridItem} ${isVisible ? styles.gridItemVisible : ''}`} ref={ref}>
      <div className={styles.background}>
          <Image className={styles.backgroundImage} src={project?.img?.[0]} alt={project?.title} />
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

export default ModalProject
