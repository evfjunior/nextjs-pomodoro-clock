import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

import styles from '../styles/Button.module.scss'

interface ButtonProps {
  status: boolean
  onClickHandler
}

export default function Button({ status, onClickHandler }: ButtonProps) {
  return (
    <button className={styles.button} type="button" onClick={onClickHandler}>
      {!status ? <FaPlayCircle size={58} /> : <FaPauseCircle size={58} />}
    </button>
  )
}
