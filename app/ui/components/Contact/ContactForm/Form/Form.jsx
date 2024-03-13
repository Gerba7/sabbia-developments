'use client'

import styles from './form.module.css';




const Form = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        return console.log(data)
        
        // try {
          
        //   const res = await createAccommodations(data);
          
        //   return router.push('/dashboard/accommodations');
    
        // } catch (err) {
    
        //   console.error(err);
    
        // }
    
    
    };



  return (
    <form className={styles.form} onSubmit={handleSubmit} id='form'>
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
            <input className={styles.input} type="number" name='phone' required  />
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
