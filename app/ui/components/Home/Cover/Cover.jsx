import styles from './cover.module.css';
import SabbiaCover from '../../../../../public/images/cover.jpg';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import SabbiaCoverTest from '../../../../../public/images/JOCHY5.jpg';
import SabbiaLogo from '../../../../../public/images/SABBIA_LOGO_BRIGHT.png';



const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={SabbiaCoverTest} alt='Sabbia cover' priority />
        </div>
        <div className={styles.coverLogo}>
          <Image className={styles.logoImg} src={SabbiaLogo} alt='Sabbia logo' priority />
        </div>
      </div>
      <Link className={styles.link} href="#main" aria-label='linkArrow'>
        <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link>
    </div>
  )
}

export default Cover
