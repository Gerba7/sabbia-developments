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
import SN6Alvear from '../../../../../public/images/SN6-ALVEAR/SN6Alvear.jpg';
import SN6Alvear2 from '../../../../../public/images/SN6-ALVEAR/SN6Alvear-2.jpg';
import SN6Alvear3 from '../../../../../public/images/SN6-ALVEAR/SN6Alvear-3.jpg';
import JOCHY6 from '../../../../../public/images/JOCHY6/JOCHY6.jpg';
import JOCHY62 from '../../../../../public/images/JOCHY6/JOCHY62.jpg';
import JOCHY63 from '../../../../../public/images/JOCHY6/JOCHY63.jpg';
import JOCHY64 from '../../../../../public/images/JOCHY6/JOCHY64.jpg';
import JOCHY65 from '../../../../../public/images/JOCHY6/JOCHY65.jpg';
import JOCHY66 from '../../../../../public/images/JOCHY6/JOCHY66.jpg';
import JOCHY67 from '../../../../../public/images/JOCHY6/JOCHY67.jpg';
import JOCHY68 from '../../../../../public/images/JOCHY6/JOCHY68.jpg';
import JOCHY69 from '../../../../../public/images/JOCHY6/JOCHY69.jpg';
import MONINA from '../../../../../public/images/MONINA/MONINA.jpg';
import MONINA2 from '../../../../../public/images/MONINA/MONINA2.jpg';
import MONINA3 from '../../../../../public/images/MONINA/MONINA3.jpg';
import MONINA4 from '../../../../../public/images/MONINA/MONINA4.jpg';
import MONINA5 from '../../../../../public/images/MONINA/MONINA5.jpg';
import VIVRELELOIR from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR.jpg';
import VIVRELELOIR2 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR2.jpg';
import VIVRELELOIR3 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR3.jpg';
import VIVRELELOIR4 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR4.jpg';
import VIVRELELOIR5 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR5.jpg';
import VIVRELELOIR6 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR6.jpg';
import VIVRELELOIR7 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR7.jpg';
import VIVRELELOIR8 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR8.jpg';
import VIVRELELOIR9 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR9.jpg';
import VIVRELELOIR10 from '../../../../../public/images/VIVRELELOIR/VIVRELELOIR10.jpg';
import JOCHY1 from '../../../../../public/images/JOCHY1/JOCHY1.jpg';
import JOCHY12 from '../../../../../public/images/JOCHY1/JOCHY12.jpg';
import JOCHY13 from '../../../../../public/images/JOCHY1/JOCHY13.jpg';
import JOCHY2 from '../../../../../public/images/JOCHY2/JOCHY2.jpg';
import JOCHY2B from '../../../../../public/images/JOCHY2/JOCHY2-2.jpg';
import JOCHY2C from '../../../../../public/images/JOCHY2/JOCHY2-3.jpg';
import JOCHY2D from '../../../../../public/images/JOCHY2/JOCHY2-4.jpg';
import JOCHY2E from '../../../../../public/images/JOCHY2/JOCHY2-5.jpg';
import JOCHY2F from '../../../../../public/images/JOCHY2/JOCHY2-6.jpg';
import JOCHY2G from '../../../../../public/images/JOCHY2/JOCHY2-7.jpg';
import JOCHY3 from '../../../../../public/images/JOCHY3/JOCHY3.jpg';
import JOCHY32 from '../../../../../public/images/JOCHY3/JOCHY32.jpg';
import JOCHY33 from '../../../../../public/images/JOCHY3/JOCHY33.jpg';
import JOCHY34 from '../../../../../public/images/JOCHY3/JOCHY34.jpg';
import JOCHY35 from '../../../../../public/images/JOCHY3/JOCHY35.jpg';
import JOCHY36 from '../../../../../public/images/JOCHY3/JOCHY36.jpg';
import JOCHY37 from '../../../../../public/images/JOCHY3/JOCHY37.jpg';
import JOCHY38 from '../../../../../public/images/JOCHY3/JOCHY38.jpg';
import JOCHY39 from '../../../../../public/images/JOCHY3/JOCHY39.jpg';
import PERLA1 from '../../../../../public/images/PERLA/PERLA1.jpg';
import PERLA1B from '../../../../../public/images/PERLA/PERLA1-2.jpg';
import PERLA1C from '../../../../../public/images/PERLA/PERLA1-3.jpg';
import PERLA1D from '../../../../../public/images/PERLA/PERLA1-4.jpg';



const projects = [
  {
    id: 0,
    title: 'SN6 – ALVEAR',
    img: [SN6Alvear, SN6Alvear2, SN6Alvear3],
    subtitle: 'PAULINO ROJAS N° 499, esq. Alvear, Ituzaingó',
    text: 'Diseño, calidad de materiales, detalles de terminación y servicios comunes. Departamentos de 2, 3, 4 y 5 ambientes, funcionales y luminosos, creados con diseño de vanguardia.Terrazas Privadas y Cocheras en Subsuelo. SUM + Coworking + Gym + Piscina + Parque',
    left: false
  },
  {
    id: 1,
    title: 'JOCHY 6',
    img: [JOCHY6, JOCHY62, JOCHY63, JOCHY64, JOCHY65, JOCHY66, JOCHY67, JOCHY68, JOCHY69],
    subtitle: 'MONTES DE OCA N° 2482, Castelar',
    text: 'Departamentos de 2, 3 y 4 Ambientes. Aberturas de aluminio con doble vidrio. Calefacción individual por piso radiante. Preinstalación de A/A. Agua caliente central con termotanques industriales a gas. Unidades al Frente, con orientación Norte. Terrazas Privadas, con Parrilla. Cocheras Fijas, cubiertas y descubiertas. Bauleras.',
    left: true
  },
  {
    id: 2,
    title: 'MONINA',
    img: [MONINA, MONINA2, MONINA3, MONINA4, MONINA5],
    subtitle: 'MONTES DE OCA N° 2550, Castelar',
    text: 'Exclusivo edificio de viviendas, compuesto por departamentos de dos y tres ambientes. Terrazas Privadas. Cocheras Fijas, cubiertas y descubiertas. Excelente ubicación, muy buenas terminaciones y bajo costo de mantenimiento.',
    left: false
  },
  {
    id: 3,
    title: 'VIVRE LELOIR',
    img: [VIVRELELOIR, VIVRELELOIR2, VIVRELELOIR3, VIVRELELOIR4, VIVRELELOIR5, VIVRELELOIR6, VIVRELELOIR7, VIVRELELOIR8, VIVRELELOIR9, VIVRELELOIR10],
    subtitle: 'UDAONDO N° 2051, Pque. Leloir, Ituzaingó',
    text: 'VIVRE Leloir es un condominio conformado por diez residencias de gran diseño y muy buenas terminaciones. Cada unidad posee una superficie cubierta de aprox. 250 m² y un lote de terreno de aprox. 350 m², con piscina, inmersas en la naturaleza que brinda Parque Leloir. Única entrada vehicular y peatonal, con garita de seguridad, cerco perimetral eléctrico y añosa arboleda.',
    left: true
  },
  {
    id: 4,
    title: 'JOCHY 1',
    img: [JOCHY1, JOCHY12, JOCHY13],
    subtitle: 'SAN PEDRO 861, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.006 \n - Avance de Obra: Terminado \n - Superficie: 1.420 m² (aprox.)', 
    left: false
  },
  {
    id: 5,
    title: 'JOCHY 2',
    img: [JOCHY2, JOCHY2B, JOCHY2C, JOCHY2D, JOCHY2E, JOCHY2F, JOCHY2G],
    subtitle: 'ARREDONDO 2350, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.008 \n - Avance de Obra: Terminado \n - Superficie: 3.960 m² (aprox.)', 
    left: true
  },
  {
    id: 6,
    title: 'JOCHY 3',
    img: [JOCHY3, JOCHY32, JOCHY33, JOCHY34, JOCHY35, JOCHY36, JOCHY37, JOCHY38, JOCHY39],
    subtitle: 'RODRIGUEZ PEÑA 993, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.010 \n - Avance de Obra: Terminado \n - Superficie: 1.970 m² (aprox.)', 
    left: false
  },
  {
    id: 10,
    title: 'PERLA 1',
    img: [PERLA1, PERLA1B, PERLA1C, PERLA1D],
    subtitle: 'RODRIGUEZ PEÑA 932, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.021 \n - Avance de Obra: Terminado \n - Superficie: 780 m² (aprox.)', 
    left: false
  }
] 



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
            <Card project={projects[1]} />
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightUp}>
            <div className={styles.cardContainer}>
              <Card project={projects[0]} />
            </div>
            <div className={styles.cardContainer}>
              <Card project={projects[2]} />
            </div>
          </div>
          <div className={styles.topRightDown}>
            <div className={styles.cardContainer}>
              <Card project={projects[3]} />
            </div>
            <div className={styles.cardContainer}>
              <Card project={projects[4]} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.cardContainer}>
          <Card project={projects[5]} />
        </div>
        <div className={styles.cardContainer}>
          <Card project={projects[6]} />
        </div>
        <div className={styles.cardContainer}>
          <Card project={projects[7]} />
        </div>
      </div>
    </div>
  )
}

export default MainProjects
