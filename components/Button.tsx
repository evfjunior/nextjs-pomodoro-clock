import { MouseEventHandler } from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

import styles from '../styles/Button.module.scss'

interface Props {
  status: boolean
  onClickHandler: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = ({ status, onClickHandler }) => {
  return (
    <button className={styles.button} type="button" tabIndex={0} aria-label={'play stop'} onClick={onClickHandler}>
      {!status ? <FaPlayCircle size={58} /> : <FaPauseCircle size={58} />}
    </button>
  )
}

export default Button
