import ContactButton from './ContactButton/ContactButton';
import styles from './contactRow.module.css';





const ContactRow = () => {
  return (
      <div className={styles.container} > 
        <div className={styles.back}>
        </div>
          <h3 className={styles.title}>CONTACTO</h3>
          <div className={styles.description}>Descubrí cómo podemos hacer realidad tu proyecto.<br/>Estamos para escucharte y responder a todas tus preguntas.<br/>¡Contactános ahora y dejános ser parte de tu visión!</div>
          <ContactButton  />
      </div>
  )
}

export default ContactRow
