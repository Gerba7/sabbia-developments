import Link from 'next/link';
import styles from './contactButton.module.css';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


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


const ContactButton = () => {
  return (
    <div style={{zIndex: '5'}}>
      <Link href="/contacto" className={styles.button}>
        EMAIL <GradientIcon icon={<ForwardToInboxIcon sx={{ fill: "url(#linearColors)"}} />} />
      </Link>
    </div>
  )
}

export default ContactButton
