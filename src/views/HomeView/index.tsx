import styles from './home-view.module.scss'

const HomeView = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={`${styles['item']} ${styles['item1']}`}>1</div>
        <div className={`${styles['item']} ${styles['item2']}`}>2</div>
        <div className={`${styles['item']} ${styles['item3']}`}>3</div>
        <div className={`${styles['item']} ${styles['item4']}`}>4</div>
        <div className={`${styles['item']} ${styles['item5']}`}>5</div>
        <div className={`${styles['item']} ${styles['item6']}`}>6</div>
      </div>
    </>
  )
}

export { HomeView }