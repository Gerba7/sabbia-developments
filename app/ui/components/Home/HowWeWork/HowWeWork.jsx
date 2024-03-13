import styles from './howWeWork.module.css';





const HowWeWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>COMO TRABAJAMOS</h3>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.top}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
