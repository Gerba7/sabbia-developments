import styles from './header.module.css';




const Header = ({title, subtitle}) => {
  return (
    <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.hr}></div>
        <h4 className={styles.subtitle}>{subtitle}</h4>
    </div>
  )
}

export default Header
