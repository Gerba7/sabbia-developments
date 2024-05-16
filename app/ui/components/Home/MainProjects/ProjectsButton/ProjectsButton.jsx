import styles from './projectsButton.module.css';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const ProjectsButton = () => {
  return (
      <Link href='/proyectos/emprendimientos' className={styles.button}>VER TODOS LOS PROYECTOS   <KeyboardArrowRightIcon fontSize='12px' sx={{alignSelf: 'center'}} /></Link>
  )
}

export default ProjectsButton
