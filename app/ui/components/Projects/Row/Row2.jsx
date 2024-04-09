import React from 'react';
import styles from './row2.module.css';
import MiniSlider from '../MiniSlider/MiniSlider';
import Casa1a from '../../../../../public/images/casas/Casa1a.jpeg';
import Casa1b from '../../../../../public/images/casas/Casa1b.jpeg';
import Casa1c from '../../../../../public/images/casas/Casa1c.jpeg';
import Casa1d from '../../../../../public/images/casas/Casa1d.jpeg';
import Casa1e from '../../../../../public/images/casas/Casa1e.jpg';
import Casa1f from '../../../../../public/images/casas/Casa1f.jpg';
import Casa1g from '../../../../../public/images/casas/Casa1g.jpg';
import Casa2a from '../../../../../public/images/casas/Casa2a.jpg';
import Casa2b from '../../../../../public/images/casas/Casa2b.jpg';
import Casa2c from '../../../../../public/images/casas/Casa2c.jpg';
import Casa2d from '../../../../../public/images/casas/Casa2d.jpg';
import Casa2e from '../../../../../public/images/casas/Casa2e.jpg';
import Casa2f from '../../../../../public/images/casas/Casa2f.jpg';
import Casa2g from '../../../../../public/images/casas/Casa2g.jpg';
import Casa2h from '../../../../../public/images/casas/Casa2h.jpg';
import Casa2i from '../../../../../public/images/casas/Casa2i.jpg';
import Casa2j from '../../../../../public/images/casas/Casa2j.jpg';
import Casa2k from '../../../../../public/images/casas/Casa2k.jpg';
import Casa2l from '../../../../../public/images/casas/Casa2l.jpg';



const casa1 = [
    {
        id: 1,
        img: Casa1a
    },
    {
        id: 2,
        img: Casa1b
    },
    {
        id: 3,
        img: Casa1c
    },
    {
        id: 4,
        img: Casa1d
    },
    {
        id: 5,
        img: Casa1e
    },
    {
        id: 6,
        img: Casa1f
    },
    {
        id: 7,
        img: Casa1g
    }, 
]


const casa2 = [
    {
        id: 1,
        img: Casa2a
    },
    {
        id: 2,
        img: Casa2b
    },
    {
        id: 3,
        img: Casa2c
    },
    {
        id: 4,
        img: Casa2d
    },
    {
        id: 5,
        img: Casa2e
    },
    {
        id: 6,
        img: Casa2f
    },
    {
        id: 7,
        img: Casa2g
    }, 
    {
        id: 8,
        img: Casa2h
    }, 
    {
        id: 9,
        img: Casa2i
    }, 
    {
        id: 10,
        img: Casa2j
    }, 
    {
        id: 11,
        img: Casa2k
    }, 
    {
        id: 12,
        img: Casa2l
    }, 
] 



const Row2 = ({left = true}) => {

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.wrapper}>
        <div className={`${styles.textContainer}`}>
            <div className={styles.header}>
                <div className={styles.texts}>
                <h2 className={styles.title}>VIVIENDAS</h2>
                <div className={styles.subtitleContainer}>
                    <h3 className={styles.subtitle}>UNIFAMILIARES</h3>
                    <div className={styles.hr} />
                </div>
                </div>
                <div className={styles.buttonContainer}>
                </div>
            </div>
        </div>
        <div className={`${styles.slider}`}>
            <MiniSlider items={casa1} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={`${styles.slider}`}>
            <MiniSlider items={casa2} />
        </div>
        <div className={`${styles.textContainer}`} style={{alignItems: 'flex-start'}}>
            <h3 className={styles.secondTitle}>VIVIENDAS UNIFAMILIARES - ZONA OESTE</h3>
            <p className={styles.paragraph}>
            - Sus superficies  de 700 a 750 m2 cubiertos respectivamente. <br/>
            - Ambas de 5 ambientes con dependencia de servicio <br/>
            - Baños en suite <br/>
            - Playroom , quincho con pileta cubierta y descubierta<br/>
            - Losa radiante más equipos de A/A central <br/>
            - Ventanas de pvc / aluminio DVH, <br/>
            - Diseño de volúmenes, techos planos y líneas rectas<br/>
            - Construcción tradicional de H° / mampostería , terminaciones <br/>
            en yeso , madera y piedra.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Row2
