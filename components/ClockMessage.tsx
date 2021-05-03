import styles from '../styles/ClockMessage.module.scss'

interface Props {
  message: string
}

const ClockMessage: React.FC<Props> = ({ message }) => {
  return <h2 className={styles.message}>{message}</h2>
}

export default ClockMessage
