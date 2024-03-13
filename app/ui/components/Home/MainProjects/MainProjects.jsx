import Card from './Card/Card';
import ProjectsButton from './ProjectsButton/ProjectsButton';
import styles from './mainProjects.module.css';
import Project1 from '../../../../../public/images/MONINA.jpg';
import Project2 from '../../../../../public/images/JOCHY5.jpg';
import Project3 from '../../../../../public/images/SN6Alvear.jpg';
import Project4 from '../../../../../public/images/VIVRELELOIR.jpg';
import Project5 from '../../../../../public/images/JOCHY1.jpg';
import Project6 from '../../../../../public/images/JOCHY2.jpg';
import Project7 from '../../../../../public/images/JOCHY3.jpg';
import Project8 from '../../../../../public/images/PERLA1.jpg';




const MainProjects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.header}>
            <div className={styles.texts}>
              <h2 className={styles.title}>PROYECTOS</h2>
              <div className={styles.subtitleContainer}>
                <div className={styles.hr} />
                <h6 className={styles.subtitle}>PRINCIPALES</h6>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <ProjectsButton />
            </div>
          </div>
          <div className={styles.cardContainer}>
            <Card img={Project2} description={'JOCHY 5'} />
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightUp}>
            <div className={styles.cardContainer}>
              <Card img={Project3} description={'SN6 – ALVEAR'} />
            </div>
            <div className={styles.cardContainer}>
              <Card img={Project1} description={'MONINA'} />
            </div>
          </div>
          <div className={styles.topRightDown}>
            <div className={styles.cardContainer}>
              <Card img={Project4} description={'VIVRE LELOIR'}/>
            </div>
            <div className={styles.cardContainer}>
              <Card img={Project5} description={'JOCHY 1'}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.cardContainer}>
          <Card img={Project6} description={'JOCHY 2'}/>
        </div>
        <div className={styles.cardContainer}>
          <Card img={Project7} description={'JOCHY 3'}/>
        </div>
        <div className={styles.cardContainer}>
          <Card img={Project8} description={'PERLA 1'}/>
        </div>
      </div>
    </div>
  )
}

export default MainProjects
