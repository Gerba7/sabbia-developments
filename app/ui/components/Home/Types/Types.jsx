import TypeCard from './TypeCard/TypeCard';
import styles from './types.module.css';
import Buildings from '../../../../../public/images/Edificios.jpg';
import House from '../../../../../public/images/Vivienda.jpg';
import Condominio from '../../../../../public/images/Condominio.jpg';
import Office from '../../../../../public/images/Oficinas.jpg';
import Comercial from '../../../../../public/images/Corredores.jpg';
import Loteo from '../../../../../public/images/Loteos.jpg';




const Types = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>TIPOS DE DESARROLLOS</h3>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.top}>
        <div className={styles.typeCardContainer}>
          <TypeCard img={Buildings} title={'Edificios'} description={'Construcción de estructuras residenciales de varios pisos destinadas a múltiples unidades de vivienda.'} />
        </div>
        <div className={styles.typeCardContainer}>
          <TypeCard img={Condominio} title={'Condominios'} description={'Proyectos residenciales de vivienda múltiples, con un enfoque en la propiedad individual de cada unidad y áreas comunes compartidas.'} />
        </div>
        <div className={styles.typeCardContainer}>
          <TypeCard img={House} title={'Viviendas'} description={'Viviendas unifamiliares o casas adosadas destinadas a particulares. Desde casas pequeñas hasta residencias de lujo.'} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.typeCardContainer}>
          <TypeCard img={Office} title={'Oficinas'} description={'Consttrucción de espacios comerciales diseñados para albergar empresas y organizaciones.'} />
        </div>
        <div className={styles.typeCardContainer}>
          <TypeCard img={Comercial} title={'Corredores comerciales'} description={'Proyectos de espacios comerciales, diseñados para albergar una variedad de negocios y servicios.'} />
        </div>
        <div className={styles.typeCardContainer}>
          <TypeCard img={Loteo} title={'Loteos'} description={'Subdivisión de terrenos grandes en lotes más pequeños, con la infraestructura necesaria como calles, aceras y servicios públicos.'} />
        </div>
      </div>
    </div>
  )
}

export default Types
