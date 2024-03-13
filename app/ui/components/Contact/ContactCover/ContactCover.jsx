import styles from './contactCover.module.css';
import Image from 'next/image';
import ContactImg from '../../../../../public/images/contacto.jpg';



const ContactCover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={ContactImg} alt='Sabbia cover' priority />
        </div>
      </div>
    </div>
  )
}

export default ContactCover
