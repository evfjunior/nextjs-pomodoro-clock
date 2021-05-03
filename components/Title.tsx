import styles from '../styles/Title.module.scss'

interface Props {
  appName: string
}

const Title: React.FC<Props> = ({ appName }) => {
  return <h1 className={styles.title}>{appName}</h1>
}

export default Title
