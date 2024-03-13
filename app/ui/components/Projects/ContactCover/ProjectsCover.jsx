import styles from './projectsCover.module.css';
import Image from 'next/image';
import ProjectsImg from '../../../../../public/images/proyectosCover.jpg';



const ProjectsCover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={ProjectsImg} alt='Sabbia cover' priority />
        </div>
      </div>
    </div>
  )
}

export default ProjectsCover
