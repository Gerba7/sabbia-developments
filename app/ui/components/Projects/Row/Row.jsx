'use client'

import Image from 'next/image';
import styles from './row.module.css';
import { use, useEffect, useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';





const Row = ({img, title, text, left, row, content, subtitle}) => {

    
    const [isVisible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [displayText, setDisplayText] = useState(false);

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
    }, [row, content])


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600); // Adjust the threshold as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleTextVisibility = () => {
        setDisplayText(!displayText)
    }



  return (
    <div className={styles.container} id='row'> 
      <div className={styles.wrapper}>
        <div className={`${styles.left} ${left ? styles.orderLeft : (isMobile ? styles.orderLeft : styles.orderRight)}`}>  
            <div className={`${styles.fadeInScroll} ${isVisible ? styles.unhidden : ''} ${left ? styles.fadeInScrollLeft : ''}` }>
                <div className={`${styles.iconContainer} ${isVisible ? styles.visible : ''}`} >
                    <Image className={styles.icon} src={img} alt={title} />
                </div>
            </div>
        </div>
        <div className={`${styles.right} ${left ? styles.orderRight : (isMobile ? styles.orderRight : styles.orderLeft)} ${left ? styles.rightInverse : ''}`}>
            <div className={`${styles.textContainer} ${isVisible ? styles.textContainerUnhidden : ''} ${left ? styles.textContainerRight : ''}`} ref={ref} >
                <div style={{marginBottom: '10px'}}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.hr}></div>
                </div>
                <h2 className={styles.subtitle}>{subtitle}</h2>
                <div className={styles.arrowContainer} onClick={handleTextVisibility}>
                    {displayText ? <KeyboardArrowUpIcon color="#fff" style={{fontSize: 'inherit'}} /> : <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} />}
                </div>
                <p className={`${styles.text} ${displayText ? styles.textVisible : ''}`}>
                    {text}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Row
