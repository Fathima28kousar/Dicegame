import styles from './StartGame.module.css'
const StartGame = ({toggle}) => {
  return (
    <div className={`${styles.container}`}>
        <img src='/images/dices.png' alt='image1'/>
        <div className={styles.content}>
          <h1>DICE GAME</h1>
        <button onClick={toggle}>Play now</button>
      </div>
    </div>
  )
}

export default StartGame
