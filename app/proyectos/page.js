import ProjectsCover from "../ui/components/Projects/ContactCover/ProjectsCover";
import SN6Alvear from '../../public/images/SN6Alvear.jpg';
import JOCHY5 from '../../public/images/JOCHY5.jpg';
import MONINA from '../../public/images/MONINA.jpg';
import VIVRELELOIR from '../../public/images/VIVRELELOIR.jpg';
import JOCHY1 from '../../public/images/JOCHY1.jpg';
import JOCHY2 from '../../public/images/JOCHY2.jpg';
import JOCHY3 from '../../public/images/JOCHY3.jpg';
import JOCHY4 from '../../public/images/JOCHY4.png';
import VICENZO from '../../public/images/VICENZO.jpg';
import GIUSEPPINA from '../../public/images/GIUSEPPINA.jpg';
import PERLA1 from '../../public/images/PERLA1.jpg';
import PERLA2 from '../../public/images/PERLA2.png';
import EVOLUZIONE3 from '../../public/images/EVOLUZIONE3.jpg';
import EVOLUZIONE2 from '../../public/images/EVOLUZIONE2.jpg';
import GIUSEPPINA2 from '../../public/images/GIUSEPPINA2.jpg';
import CHIUSO from '../../public/images/CHIUSO.png';
import PLATINUMOFFICE from '../../public/images/PLATINUMOFFICE.jpg';
import PLATINUMCARLOSCASARES from '../../public/images/PLATINUMCARLOSCASARES.png';
import PAVILON from '../../public/images/PAVILON.png';
import Row from "../ui/components/Projects/Row/Row";
import ProjectsTitle from "../ui/components/Projects/ProjectsTitle/ProjectsTitle";


const projects = [
  {
    id: 0,
    title: 'SN6 – ALVEAR',
    img: SN6Alvear,
    subtitle: 'PAULINO ROJAS N° 499, esq. Alvear, Ituzaingó',
    text: 'Edificio de categoría que se destaca por sudiseño, calidad de materiales, detalles determinación y servicios comunes. Departamentos de dos, tres, cuatro y cincoambientes, funcionales y luminosos, creados bajo un concepto de diseño de vanguardia.Terrazas Privadas y Cocheras en Subsuelo. SUM + Coworking + Gym + Piscina +Parque + etc.',
    left: false
  },
  {
    id: 1,
    title: 'JOCHY 5',
    img: JOCHY5,
    subtitle: 'MONTES DE OCA N° 2482, Castelar',
    text: 'Exclusivo edificio con Departamentos de 2, 3 y 4 Ambientes. Aberturas de aluminio anodizado con ruptura de puente térmico y doble vidrio. Calefacción individual por piso radiante. Preinstalación de A/A. Agua caliente central con termotanques industriales a gas. Unidades al Frente, con orientación Norte. Terrazas Privadas, con Parrilla. Cocheras Fijas, cubiertas y descubiertas. Bauleras.',
    left: true
  },
  {
    id: 2,
    title: 'MONINA',
    img: MONINA,
    subtitle: 'MONTES DE OCA N° 2550, Castelar',
    text: 'Exclusivo edificio de viviendas, compuesto por departamentos de dos y tres ambientes. Terrazas Privadas. Cocheras Fijas, cubiertas y descubiertas. Excelente ubicación, muy buenas terminaciones y bajo costo de mantenimiento.',
    left: false
  },
  {
    id: 3,
    title: 'VIVRE LELOIR',
    img: VIVRELELOIR,
    subtitle: 'UDAONDO N° 2051, Pque. Leloir, Ituzaingó',
    text: 'VIVRE Leloir es un condominio conformado por diez residencias de gran diseño y muy buenas terminaciones. Cada unidad posee una superficie cubierta de aprox. 250 m² y un lote de terreno de aprox. 350 m², con piscina, inmersas en la naturaleza que brinda Parque Leloir.Única entrada vehicular y peatonal, con garita de seguridad, cerco perimetral eléctrico y añosa arboleda.',
    left: true
  },
  {
    id: 4,
    title: 'JOCHY 1',
    img: JOCHY1,
    subtitle: 'SAN PEDRO 861, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.006 \n - Avance de Obra: Terminado \n - Superficie: 1.420 m² (aprox.)', 
    left: false
  },
  {
    id: 5,
    title: 'JOCHY 2',
    img: JOCHY2,
    subtitle: 'ARREDONDO 2350, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.008 - Avance de Obra: Terminado - Superficie: 3.960 m² (aprox.)', 
    left: true
  },
  {
    id: 6,
    title: 'JOCHY 3',
    img: JOCHY3,
    subtitle: 'RODRIGUEZ PEÑA 993, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.010 - Avance de Obra: Terminado - Superficie: 1.970 m² (aprox.)', 
    left: false
  },
  {
    id: 7,
    title: 'JOCHY 4',
    img: JOCHY4,
    subtitle: 'GDOR. I. ARIAS 2353, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.012 - Avance de Obra: Terminado - Superficie: 2.180 m² (aprox.)', 
    left: true
  },
  {
    id: 8,
    title: 'VICENZO',
    img: VICENZO,
    subtitle: 'SAN PEDRO 833, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.015 - Avance de Obra: Terminado - Superficie: 880 m² (aprox.)', 
    left: false
  },
  {
    id: 9,
    title: 'GIUSEPPINA',
    img: GIUSEPPINA,
    subtitle: 'POMPEYA 2426, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.017 - Avance de Obra: Terminado - Superficie: 900 m² (aprox.)', 
    left: true
  },
  {
    id: 10,
    title: 'PERLA 1',
    img: PERLA1,
    subtitle: 'RODRIGUEZ PEÑA 932, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.021 - Avance de Obra: Terminado - Superficie: 780 m² (aprox.)', 
    left: false
  },
  {
    id: 11,
    title: 'PERLA 2',
    img: PERLA2,
    subtitle: 'MONTES DE OCA 2530, Castelar, Bs. As.',
    text: '- Fecha Inicio Obra (aprox.): 2.021 - Avance de Obra: Terminado - Superficie: 780 m² (aprox.)', 
    left: true
  },
  {
    id: 12,
    title: 'EVOLUZIONE 2',
    img: EVOLUZIONE2,
    subtitle: 'FRANCIA 2584, Castelar, Bs. As.',
    text: 'Departamentos de 2 ambientes con cocheras y terrazas privadas. Apto profesional.', 
    left: false
  },
  {
    id: 13,
    title: 'EVOLUZIONE 3',
    img: EVOLUZIONE3,
    subtitle: 'RODRIGUEZ PEÑA 919, Castelar, Bs. As.',
    text: 'Monoambientes de 35m2 aproximadamente, edificio apto profesional, a cuatro cuadras de la estación de Castelar lado Norte', 
    left: true
  },
  {
    id: 14,
    title: 'GIUSEPPINA 2',
    img: GIUSEPPINA2,
    subtitle: 'SOLER 536, Castelar, Bs. As.',
    text: 'Edificio de amplios departamentos de dos ambientes para vivir y apto profesional. Equipados con parrilla en sus balcones. Terrazas privadas y cocheras (opcional) cubiertas y descubiertas. Agua caliente central a gas, aberturas de PVC con vidrio doble, pisos de porcelanato, artefactos Ferrum y griferias FV. Entrega: Abril 2023', 
    left: false
  },
  {
    id: 15,
    title: 'PLATINUM OFFICE',
    img: PLATINUMOFFICE,
    subtitle: 'RIVADAVIA 19.861, Castelar, Bs. As.',
    text: 'Este emprendimiento marca un nuevo concepto de oficinas, de acuerdo con las tendencias actuales que combinan los lugares de trabajo con espacios comerciales. Ubicado a una cuadra y media de la Estación, lado Norte, en un entorno de plena expansión. El emprendimiento incluye 52 Oficinas de PLANTAS FLEXIBLES (con la posibilidad de vincular varias oficinas), 6 Locales Comerciales y 22 Cocheras fijas.', 
    left: true
  },
  {
    id: 16,
    title: 'PLATINUM CARLOS CASARES',
    img: PLATINUMCARLOSCASARES,
    subtitle: 'CARLOS CASARES 1111, Castelar, Bs. As.',
    text: 'Excelente ubicación, nuevo corredor comercial. Planta baja: Amplios locales con doble altura, Planta alta: Departamentos de 1, 2 y 3 ambientes, cada uno con su propia terraza. Cocheras en planta baja y subsuelo.', 
    left: false
  },
  {
    id: 17,
    title: 'THE PAVILON',
    img: PAVILON,
    subtitle: 'N. DE ARREDONDO 2377, Castelar, Bs. As.',
    text: 'Excelente ubicación, nuevo corredor comercial. Planta baja: Amplios locales con doble altura, Planta alta: Departamentos de 1, 2 y 3 ambientes, cada uno con su propia terraza. Cocheras cubiertas.', 
    left: true
  },
  {
    id: 18,
    title: 'CHIUSO',
    img: CHIUSO,
    subtitle: 'LEANDRO N. ALEM 2521, Castelar, Bs. As.',
    text: 'Único LOTEO CERRADO conformado por cuatro lotes de terreno de más de 300 m2 cada uno, ubicado a tan solo ocho cuadras de la Estación de Castelar lado Norte. El Acceso vehicular y peatonal al Loteo Residencial será Privado. En cada lote de terreno se podrá construir una Vivienda Unifamiliar. EXCELENTE OPORTUNIDAD PARA VIVIR EN TU CASA SOÑADA, MÁS SEGURO Y MÁS', 
    left: false
  }
]



const Projects = () => {
  return (
    <div>
      <ProjectsCover />
      <ProjectsTitle />
      {projects.map((project) => {
        return(
          <Row key={project.id} img={project.img} title={project.title} subtitle={project.subtitle} left={project.left} text={project.text} />
        )
      })}
    </div>
  )
}

export default Projects
