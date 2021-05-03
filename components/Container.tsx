import { ReactNode } from 'react'

import styles from '../styles/Container.module.scss'

interface Props {
  children: ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return <main className={styles.container}>{children}</main>
}

export default Container
