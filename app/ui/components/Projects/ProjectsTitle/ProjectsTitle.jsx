import styles from './projectsTitle.module.css';




const ProjectsTitle = () => {
  return (
    <div className={`${styles.textContainer}`}>
        <div className={styles.header}>
            <div className={styles.texts}>
            <h2 className={styles.title}>EDIFICIOS</h2>
            <div className={styles.subtitleContainer}>
                <h3 className={styles.subtitle}>Y CORREDORES</h3>
                <div className={styles.hr} />
            </div>
            </div>
            <div className={styles.buttonContainer}>
            </div>
        </div>
    </div>
  )
}

export default ProjectsTitle
