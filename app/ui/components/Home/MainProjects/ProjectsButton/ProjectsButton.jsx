import styles from './projectsButton.module.css';
import Link from 'next/link';




const ProjectsButton = () => {
  return (
    <div>
      <Link href='/proyectos' className={styles.button}>VER TODOS LOS PROYECTOS   &gt;</Link>
    </div>
  )
}

export default ProjectsButton
