import styles from '../styles/Timer.module.scss'

interface Props {
  input: number
}

const Timer: React.FC<Props> = ({ input }) => {
  const time = input

  const minutes = String(Math.floor(time / 60)).padStart(2, '0')
  const seconds = String(Math.floor(time % 60)).padStart(2, '0')

  return (
    <div className={styles.timer}>
      {minutes}:{seconds}
    </div>
  )
}

export default Timer
