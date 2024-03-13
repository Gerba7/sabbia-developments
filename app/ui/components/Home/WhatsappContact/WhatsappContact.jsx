import Link from 'next/link';
import styles from './whatsappContact.module.css';
import Image from 'next/image';
import WappLogo from '../../../../../public/images/WappLogo.png';




const WhatsappContact = () => {
  return (
    <Link className={styles.whatsapp} href="https://api.whatsapp.com/send?phone=5491111111111">
      <Image className={styles.img} src={WappLogo} alt='wappLogo' />
    </Link>
  )
}

export default WhatsappContact
