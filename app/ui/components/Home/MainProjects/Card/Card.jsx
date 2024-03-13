import Image from 'next/image';
import styles from './card.module.css';



const Card = ({img, description}) => {
  return (
      <div className={styles.card}>
        <div className={styles.background}>
            <Image className={styles.backgroundImage} src={img} alt='Proyecto' />
        </div>
        <div className={styles.descriptionContainer}>
          <h4 className={styles.description}>{description}</h4>
        </div>
      </div>
  )
}

export default Card
