import styles from '../styles/Display.module.scss'

interface DisplayProps {
  input: number
}

export default function Display({ input }: DisplayProps) {
  const time = input

  const minutes = String(Math.floor(time / 60)).padStart(2, '0')
  const seconds = String(Math.floor(time % 60)).padStart(2, '0')

  return (
    <div className={styles.display}>
      {minutes}:{seconds}
    </div>
  )
}
