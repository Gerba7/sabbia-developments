import styles from './pageCover2.module.css';
import Image from 'next/image';



const PageCover2 = ({img}) => {
    
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          {/* <Image className={styles.backgroundImage} src={img} alt='Sabbia cover' priority /> */}
        </div>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>PROYECTOS</h1>
            <div className={styles.hr}></div>
        </div>
      </div>
    </div>
  )
}

export default PageCover2