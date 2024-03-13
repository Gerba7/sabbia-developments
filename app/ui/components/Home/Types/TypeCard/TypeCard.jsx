import Image from 'next/image';
import styles from './typeCard.module.css';



const TypeCard = ({img, description, title}) => {
  return (
      <div className={styles.card}>
        <div className={styles.background}>
            <Image className={styles.backgroundImage} src={img} alt='Proyecto' />
            <div className={styles.filter}></div>
        </div>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.description}>{description}</h4>
        </div>
      </div>
  )
}

export default TypeCard
