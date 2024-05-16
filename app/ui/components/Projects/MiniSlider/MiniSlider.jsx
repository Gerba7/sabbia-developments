'use client'

import React, { useEffect, useState } from 'react';
import styles from './miniSlider.module.css';
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const MiniSlider = ({items}) => {

    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items?.img?.length - 1)
        } else {
            setSlideIndex(slideIndex < items?.img?.length - 1 ? slideIndex + 1 : 0)
        }

    }

    const carouselScroll = () => {

        if (slideIndex === items?.img?.length - 1) {
            return setSlideIndex(0)
        }
        
        return setSlideIndex(slideIndex + 1)
    }


    useEffect(() => {
        
        const interval = setInterval(() => {carouselScroll()}, 5000)

        return () => clearInterval(interval)

    }, [slideIndex])




  return (
    <div className={styles.container}>
        <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleClick("left")}>
            <KeyboardArrowLeftIcon style={{color: '#f5f5f5'}} />
        </div>
        <div className={styles.wrapper}>
            {items?.img?.map((item, idx) => (
                <div className={styles.slide} key={idx} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                    <div className={styles.background}>
                        <Image src={item} className={styles.backgroundImg} alt='Casas' />
                    </div>
                </div>
            ))}
        </div>
        <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleClick("right")}>
            <KeyboardArrowRightIcon style={{color: '#f5f5f5'}} />
        </div>
        <div className={styles.dotsContainer}>
            {items?.img?.map((_, idx) => (
                <div key={idx} className={`${styles.dot} ${slideIndex === idx && styles.dotActive}`} onClick={() => setSlideIndex(idx)} />
            ))}
        </div>
    </div>
  )
}

export default MiniSlider
