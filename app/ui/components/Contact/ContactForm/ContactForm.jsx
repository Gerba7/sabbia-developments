

import styles from './contactForm.module.css';
import FormCover from '../../../../../public/images/formCover.jpg';
import Image from 'next/image';
import Logo from '../../../../../public/images/logo.svg';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Form from './Form/Form';
import Sabbia_Logo from '../../../../../public/images/SABBIA_LOGO_BRIGHT.png';



const ContactForm = () => {


  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={FormCover} alt='Sabbia cover' priority />
        </div>
      </div>
      <div className={styles.titleContainer}>
        {/* <h3 className={styles.title}>CONTACTO</h3>
        <div className={styles.hr}></div> */}
        <h4 className={styles.subtitle}>Hacemos visitas a obra sin cargo y asesoramiento para lograr un presupuesto adaptado a cada cliente. Por cualquier consulta, completar el fomulario a continuación y le responderemos a la brevedad.</h4>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.left}>
            <Image src={Sabbia_Logo} alt='sabbia logo' width={200} height={40} />
            <h3 className={styles.contactTitle}>Datos de Contacto</h3>
            <div className={styles.iconsContainer}>
                <div className={styles.icon}>
                    <FmdGoodOutlinedIcon style={{color: '#55504d'}}/>
                    <p className={styles.iconText}>Gdor. I. Arias 2671</p>
                </div>
                <div className={styles.icon}>
                    <LocalPhoneOutlinedIcon style={{color: '#55504d'}} />
                    <p className={styles.iconText}>+54 11 4624 0487</p>
                </div>
                <div className={styles.icon}>
                    <AlternateEmailOutlinedIcon style={{color: '#55504d'}} />
                    <p className={styles.iconText}>contacto@sabbia.com.ar</p>
                </div>
            </div>
            <div className={styles.socialContainer}>
                <div className={`${styles.socialIcon} ${styles.whatsapp}`}>
                    <WhatsAppIcon />
                </div>
                <div className={`${styles.socialIcon} ${styles.facebook}`}>
                    <FacebookIcon />
                </div>
                <div className={`${styles.socialIcon} ${styles.instagram}`}>
                    <InstagramIcon />
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
