import ContactButton from './ContactButton/ContactButton';
import styles from './contactRow.module.css';
import Parallax from '../../../../../public/images/formCover.jpg';
import Image from 'next/image';





const ContactRow = () => {
  return (
      <div className={styles.container} > 
        <div className={styles.back}>
        </div>
          <h3 className={styles.title}>CONTACTATE CON NOSOTROS</h3>
          <div className={styles.description}>Descubrí cómo podemos hacer realidad tu proyecto. Estamos listos para escucharte y responder a todas tus preguntas. ¡Contactános ahora y dejános ser parte de tu visión!</div>
          <ContactButton  />
      </div>
  )
}

export default ContactRow
