import PageCover2 from '../ui/components/Common/PageCover/PageCover2';
import styles from '../ui/components/Services/servicios.module.css';
import House from '../../public/images/house.svg';
import Blueprint from '../../public/images/blueprint.svg';
import Architect from '../../public/images/architect.svg';
import Image from 'next/image';



const Services = () => {
  return (
    <div>
      <PageCover2 title={'SERVICIOS'} />
      <div className={styles.wrapper}>
        <div className={styles.serviceContainer}>
          <h5 className={styles.title}>DESARROLLO</h5>
          <p className={styles.description}>
            Ofrecemos una búsqueda meticulosa de propiedades y terrenos, 
            acompañada de un análisis de factibilidad exhaustivo, asesoramiento 
            integral y gestión de obras para inversión. Nos comprometemos a 
            identificar oportunidades que se alineen con los objetivos de nuestros 
            clientes, asegurando que cada proyecto supere las expectativas y metas 
            establecidas.
          </p>
        </div>
        <div className={styles.serviceContainer}>
          <h5 className={styles.title}>PROYECTO Y DIRECCIÓN</h5>
          <p className={styles.description}>
            Nuestro equipo se encarga del diseño integral y la elaboración de planos 
            detallados, garantizando una ejecución impecable de cada obra. Mediante 
            una planificación financiera detallada, anticipamos todos los costos y plazos 
            de realización, minimizando cualquier eventualidad. Nos distinguimos por un 
            seguimiento meticuloso de cada proyecto y una comunicación constante y efectiva 
            con nuestro equipo técnico.
          </p>
        </div>
        <div className={styles.serviceContainer}>
          <h5 className={styles.title}>CONSTRUCCIÓN</h5>
          <p className={styles.description}>
            Mantenemos una presencia activa en cada fase de la construcción, ejerciendo un 
            control riguroso sobre la calidad de los materiales y su utilización óptima. 
            Prestamos especial atención a los detalles y acabados finales, asegurando la completa 
            satisfacción de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
