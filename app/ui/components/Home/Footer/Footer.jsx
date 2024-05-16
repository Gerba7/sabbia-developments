import styles from './footer.module.css';
import Image from 'next/image';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Sabbia_Logo from '../../../../../public/images/SABBIA_LOGO_NAV.png';
import Link from 'next/link';



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


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={Sabbia_Logo} alt='sabbia logo' width={200} height={40} />
            </div>
            <div className={styles.socialContainer}>
                <Link href='https://api.whatsapp.com/send?phone=5491144090600' className={`${styles.socialIcon} ${styles.whatsapp}`}>
                    <GradientIcon icon={<WhatsAppIcon sx={{ fill: "url(#linearColors)"}} />} />
                </Link>
                <div className={`${styles.socialIcon} ${styles.instagram}`}>
                    <GradientIcon icon={<InstagramIcon sx={{ fill: "url(#linearColors)"}} />} />
                </div>
            </div>
            <div className={styles.iconsContainer}>
                <div className={styles.icon}>
                    <GradientIcon icon={<FmdGoodOutlinedIcon sx={{ fill: "url(#linearColors)"}} />} />
                    <p className={styles.iconText}>Gdor. I. Arias 2671, Castelar, Bs.As. - Arg.</p>
                </div>
                <div className={styles.icon}>
                    <GradientIcon icon={<LocalPhoneOutlinedIcon sx={{ fill: "url(#linearColors)"}} />} />
                    <p className={styles.iconText}>+54 9 11 4409 0600<br/>+54 9 11 5996 6552</p>
                </div>
                <div className={styles.icon}>
                    <GradientIcon icon={<AlternateEmailOutlinedIcon sx={{ fill: "url(#linearColors)"}} />} />
                    <p className={styles.iconText}>info@sabbiavolumi.ar</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
