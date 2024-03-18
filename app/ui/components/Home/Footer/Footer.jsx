import styles from './footer.module.css';
import Image from 'next/image';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Sabbia_Logo from '../../../../../public/images/SABBIA_LOGO_BRIGHT.png';




const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <Image src={Sabbia_Logo} alt='sabbia logo' width={200} height={40} />
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
            <div className={styles.iconsContainer}>
                <div className={styles.icon}>
                    <FmdGoodOutlinedIcon style={{color: '#55504d'}}/>
                    <p className={styles.iconText}>Av. del Libertador 3332</p>
                </div>
                <div className={styles.icon}>
                    <LocalPhoneOutlinedIcon style={{color: '#55504d'}} />
                    <p className={styles.iconText}>+54 11 2345 5432</p>
                </div>
                <div className={styles.icon}>
                    <AlternateEmailOutlinedIcon style={{color: '#55504d'}} />
                    <p className={styles.iconText}>contacto@sabbia.com.ar</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
