

import styles from './contactForm.module.css';
import FormCover from '../../../../../public/images/formCover.jpg';
import Image from 'next/image';
import Logo from '../../../../../public/images/logo.svg';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Form from './Form/Form';
import Sabbia_Logo from '../../../../../public/images/SABBIA_LOGO_NAV.png';



export const GradientIcon = ({icon}) => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={1}>
        <stop offset={0} stopColor="rgba(182,154,121,1)" />
        <stop offset={0.3} stopColor="rgba(255,216,162,1)" />
        <stop offset={0.7} stopColor="rgba(255,216,162,1)" />
        <stop offset={1} stopColor="rgba(182,154,121,1)" />
      </linearGradient>
    </svg>
    {icon}
  </>
)


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
            <Image src={Sabbia_Logo} alt='sabbia logo' width={250} height={50} />
            <h3 className={styles.contactTitle}>Datos de Contacto</h3>
            <div className={styles.iconsContainer}>
                <div className={styles.icon}>
                    <GradientIcon icon={<FmdGoodOutlinedIcon sx={{ fill: "url(#linearColors)"}} />} />
                    <h4 className={styles.iconText}>Gdor. I. Arias 2671, Castelar, Bs.As. - Arg.</h4>
                </div>
                <div className={styles.icon}>
                    <GradientIcon icon={<LocalPhoneOutlinedIcon sx={{ fill: "url(#linearColors)"}}  />} />
                    <h4 className={styles.iconText}>+54 9 11 4409 0600<br/>+54 9 11 5996 6552</h4>
                </div>
                <div className={styles.icon}>
                    <GradientIcon icon={<AlternateEmailOutlinedIcon sx={{ fill: "url(#linearColors)"}} />} />
                    <h4 className={styles.iconText}>info@sabbiavolumi.ar</h4>
                </div>
            </div>
            <div className={styles.socialContainer}>
                <div className={`${styles.socialIcon} ${styles.whatsapp}`}>
                    <GradientIcon icon={<WhatsAppIcon sx={{ fill: "url(#linearColors)"}} />} />
                </div>
                <div className={`${styles.socialIcon} ${styles.instagram}`}>
                    <GradientIcon icon={<InstagramIcon sx={{ fill: "url(#linearColors)"}} />} />
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
