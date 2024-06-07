import { createMessage, sendContactForm } from '@/app/lib/apiRequest';
import styles from './form.module.css';




const Form = () => {



  return (
    <form className={styles.form} action={createMessage} id='form'>
        <div className={styles.formItem}>
            <label className={styles.label}>Nombre y Apellido</label>
            <input className={styles.input} type="text" name='name' required />
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>E-Mail</label>
            <input className={styles.input} type="email" name='email' required />
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>Telefono</label>
            <input className={styles.input} type="number" name='phone' min={0} required  />
        </div>
        <div className={styles.formItem}>
            <label className={styles.label}>Mensaje</label>
            <textarea className={styles.textarea} type="text" name='message' required />
        </div>
        <button className={styles.button} type='submit' form='form' >ENVIAR MENSAJE</button>
    </form>
  )
}

export default Form
