import styles from './projectsTitle.module.css';




const ProjectsTitle = ({title, subtitle}) => {
  return (
    <div className={`${styles.textContainer}`}>
        <div className={styles.header}>
            <div className={styles.texts}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subtitleContainer}>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <div className={`${styles.hr} ${title === 'VIVIENDAS' ? styles.hrWidth : ''}`} />
            </div>
            </div>
            <div className={styles.buttonContainer}>
            </div>
        </div>
    </div>
  )
}

export default ProjectsTitle
