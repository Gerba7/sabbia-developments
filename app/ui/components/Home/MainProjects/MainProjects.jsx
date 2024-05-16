import Card from './Card/Card';
import ProjectsButton from './ProjectsButton/ProjectsButton';
import styles from './mainProjects.module.css';
import Project1 from '../../../../../public/images/MONINA/MONINA.jpg';
import Project2 from '../../../../../public/images/JOCHY6/JOCHY6.jpg';
import Project3 from '../../../../../public/images/SN6-ALVEAR/SN6Alvear.jpg';
import Project4 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR.jpg';
import Project5 from '../../../../../public/images/JOCHY1/JOCHY1.jpg';
import Project6 from '../../../../../public/images/JOCHY2/JOCHY2.jpg';
import Project7 from '../../../../../public/images/JOCHY3/JOCHY3.jpg';
import Project8 from '../../../../../public/images/PERLA/PERLA1.jpg';




const MainProjects = () => {

  

  return (
    <div className={styles.container} >
      <div className={styles.scrollOffset} id='main'></div>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.header}>
            <div className={styles.texts}>
              <h2 className={styles.title}>PROYECTOS</h2>
              <div className={styles.subtitleContainer}>
                <div className={styles.hr} />
                <h3 className={styles.subtitle}>PRINCIPALES</h3>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <ProjectsButton />
            </div>
          </div>
          <div className={styles.cardContainer}>
            <Card img={Project2} title={'JOCHY 5'} description={'Diseño, calidad de materiales, detalles de terminación y servicios comunes. Departamentos de 2, 3, 4 y 5 ambientes, funcionales y luminosos, creados con diseño de vanguardia.Terrazas Privadas y Cocheras en Subsuelo. SUM + Coworking + Gym + Piscina + Parque'} />
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightUp}>
            <div className={styles.cardContainer}>
              <Card img={Project3} title={'SN6 – ALVEAR'} description={'Departamentos de 2, 3 y 4 Ambientes. Aberturas de aluminio con doble vidrio. Calefacción individual por piso radiante. Preinstalación de A/A. Agua caliente central con termotanques industriales a gas. Unidades al Frente, con orientación Norte. Terrazas Privadas, con Parrilla. Cocheras Fijas, cubiertas y descubiertas. Bauleras.'} />
            </div>
            <div className={styles.cardContainer}>
              <Card img={Project1} title={'MONINA'} description={'Exclusivo edificio de viviendas, compuesto por departamentos de dos y tres ambientes. Terrazas Privadas. Cocheras Fijas, cubiertas y descubiertas. Excelente ubicación, muy buenas terminaciones y bajo costo de mantenimiento.'} />
            </div>
          </div>
          <div className={styles.topRightDown}>
            <div className={styles.cardContainer}>
              <Card img={Project4} title={'VIVRE LELOIR'} description={'VIVRE Leloir es un condominio conformado por diez residencias de gran diseño y muy buenas terminaciones. Cada unidad posee una superficie cubierta de aprox. 250 m² y un lote de terreno de aprox. 350 m², con piscina, inmersas en la naturaleza que brinda Parque Leloir. Única entrada vehicular y peatonal, con garita de seguridad, cerco perimetral eléctrico y añosa arboleda.'} />
            </div>
            <div className={styles.cardContainer}>
              <Card img={Project5} title={'JOCHY 1'} description={'- Fecha Inicio Obra (aprox.): 2.006 \n - Avance de Obra: Terminado \n - Superficie: 1.420 m² (aprox.)'} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.cardContainer}>
          <Card img={Project6} title={'JOCHY 2'} description={'- Fecha Inicio Obra (aprox.): 2.008 \n - Avance de Obra: Terminado \n - Superficie: 3.960 m² (aprox.)'} />
        </div>
        <div className={styles.cardContainer}>
          <Card img={Project7} title={'JOCHY 3'} description={'- Fecha Inicio Obra (aprox.): 2.010 \n - Avance de Obra: Terminado \n - Superficie: 1.970 m² (aprox.)'} />
        </div>
        <div className={styles.cardContainer}>
          <Card img={Project8} title={'PERLA 1'} description={'- Fecha Inicio Obra (aprox.): 2.021 \n - Avance de Obra: Terminado \n - Superficie: 780 m² (aprox.)'} />
        </div>
      </div>
    </div>
  )
}

export default MainProjects
