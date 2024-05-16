import styles from './cover.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import SabbiaLogo from '../../../../../public/images/SABBIA_LOGO_BRIGHT_2.png';


const GradientArrowIcon = () => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={1}>
        <stop offset={0} stopColor="rgba(182,154,121,1)" />
        <stop offset={0.3} stopColor="rgba(255,216,162,1)" />
        <stop offset={0.7} stopColor="rgba(255,216,162,1)" />
        <stop offset={1} stopColor="rgba(182,154,121,1)" />
      </linearGradient>
    </svg>
    <KeyboardArrowDownIcon sx={{ fill: "url(#linearColors)", fontSize:'70px' }} />
  </>
)


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          {/* <Image className={styles.backgroundImage} src={SabbiaCoverTest} alt='Sabbia cover' priority /> */}
        </div>
        <div className={styles.coverLogo}>
          <Image className={styles.logoImg} src={SabbiaLogo} alt='Sabbia logo' priority />
        </div>
      </div>
      <Link className={styles.link} href="#main" aria-label='linkArrow'>
        <GradientArrowIcon color="inherit" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link>
    </div>
  )
}

export default Cover
