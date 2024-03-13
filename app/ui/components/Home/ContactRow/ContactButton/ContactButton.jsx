import styles from './contactButton.module.css';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';




const ContactButton = () => {
  return (
    <div style={{zIndex: '5'}}>
      <button className={styles.button}>CONTACTO <ForwardToInboxIcon /></button>
    </div>
  )
}

export default ContactButton
