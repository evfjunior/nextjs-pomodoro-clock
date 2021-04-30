import { ReactNode } from 'react'

import styles from '../styles/Container.module.scss'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <main className={styles.container}>{children}</main>
}
