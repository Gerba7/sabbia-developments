import styles from '../ui/components/Home/Company/company.module.css';
import PageCover2 from '../ui/components/Common/PageCover/PageCover2';
import Image from 'next/image';
import Building from '../../public/images/building.png';



const WhoWeAre = () => {
  return (
    <div>
      <PageCover2 title={'EMPRESA'} />
      <div className={styles.container}>
        <div className={styles.serviceContainer}>
          <div className={styles.icon}>
            <Image src={Building} alt='building' width={50} height={50} />
          </div>
          <h5 className={styles.title}>SOBRE NOSOTROS</h5>
          <hr className={styles.hr} />
          <div className={styles.description}>
            <h4 className={styles.paragraph}>
                Somos una empresa constructora de prestigio, especializada en viviendas unifamiliares 
                y edificios de mediana envergadura. Nos comprometemos a cumplir con los plazos y condiciones 
                acordados en cada proyecto. Nuestra dedicación, profesionalismo y compromiso son los pilares 
                que nos diferencian, ofreciendo una atención al cliente de alta calidad y atención minuciosa 
                a los detalles. Brindamos un servicio integral de construcción que abarca desde el asesoramiento 
                en la selección del terreno hasta la gestión completa del proyecto, incluyendo la dirección de 
                obra y la asesoría en la adquisición de materiales.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
