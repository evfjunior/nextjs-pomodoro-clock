import styles from '../styles/Title.module.scss'

interface TitleProps {
  appName: string
}

export default function Title({ appName }: TitleProps) {
  return <h1 className={styles.title}>{appName}</h1>
}
