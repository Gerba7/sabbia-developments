import styles from './pageCover.module.css';
import Image from 'next/image';



const PageCover = ({img}) => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={img} alt='Sabbia cover' priority />
        </div>
      </div>
    </div>
  )
}

export default PageCover
