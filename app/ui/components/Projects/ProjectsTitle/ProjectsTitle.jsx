import styles from './projectsTitle.module.css';




const ProjectsTitle = () => {
  return (
    <div className={styles.titleContainer}>
        <h3 className={styles.title}>PROYECTOS</h3>
        <div className={styles.hr}></div>
        <h4 className={styles.subtitle}>Hacemos visitas a obra sin cargo y asesoramiento para lograr un presupuesto adaptado a cada cliente. Por cualquier consulta, completar el fomulario a continuación y le responderemos a la brevedad.</h4>
    </div>
  )
}

export default ProjectsTitle
