import styles from '../styles/ClockMessage.module.scss'

interface ClockMessageProps {
  message: string
}

export default function ClockMessage({ message }: ClockMessageProps) {
  return <h2 className={styles.message}>{message}</h2>
}
