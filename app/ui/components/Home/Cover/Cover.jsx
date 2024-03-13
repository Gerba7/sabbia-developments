import styles from './cover.module.css';
import SabbiaCover from '../../../../../public/images/cover.jpg';
import Image from 'next/image';



const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={SabbiaCover} alt='Sabbia cover' priority />
        </div>
      </div>
    </div>
  )
}

export default Cover
