import styles from './company.module.css';



const Company = () => {

  return (
    <div className={styles.container} id="Home">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>EMPRESA</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.description}>
        <p className={styles.paragraph}>
            Somos una empresa constructora de prestigio, especializada en viviendas unifamiliares 
            y edificios de mediana envergadura. Nos comprometemos a cumplir con los plazos y condiciones 
            acordados en cada proyecto. Nuestra dedicación, profesionalismo y compromiso son los pilares 
            que nos diferencian, ofreciendo una atención al cliente de alta calidad y atención minuciosa 
            a los detalles. Brindamos un servicio integral de construcción que abarca desde el asesoramiento 
            en la selección del terreno hasta la gestión completa del proyecto, incluyendo la dirección de 
            obra y la asesoría en la adquisición de materiales.
        </p>
      </div>
    </div>
  )

}

export default Company
