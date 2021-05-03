import { useEffect, useMemo, useState } from 'react'

import Button from './Button'
import CircularProgressBar from './CircularProgressBar'
import ClockMessage from './ClockMessage'
import Timer from './Timer'

import styles from '../styles/Clock.module.scss'

export default function Clock() {
  const breakTime = 60 * 5
  const taskTime = 60 * 25

  const [isActive, setIsActive] = useState<boolean>(false)
  const [isTaskTimer, setIsTaskTimer] = useState<boolean>(true)
  const [currentTimer, setCurrentTimer] = useState<number>(taskTime)
  const [tasksComplete, setTasksComplete] = useState<number>(0)
  const [time, setTime] = useState<number>(taskTime)

  let counterTimeout: NodeJS.Timeout

  function handleClick() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  function startCounter() {
    if (isActive && time >= -1)
      counterTimeout = setTimeout(() => setTime(time - 1), 1000)

    if (time === -1) {
      setIsActive(false)
      setTime(0)
      clearTimeout(counterTimeout)
      setIsTaskTimer(!isTaskTimer)

      if (isTaskTimer) setTasksComplete(tasksComplete + 1)
    }
  }

  function setupTaskTimer() {
    setTime(taskTime)
    setCurrentTimer(taskTime)
  }

  function setupBreakTimer() {
    if (tasksComplete === 4) {
      setTime(breakTime * 3)
      setCurrentTimer(breakTime * 3)
      setTasksComplete(0)
      return
    }

    setTime(breakTime)
    setCurrentTimer(breakTime)
  }

  useMemo(() => startCounter(), [isActive, time])

  useEffect(() => {
    isTaskTimer ? setupTaskTimer() : setupBreakTimer()
  }, [isTaskTimer])

  return (
    <article className={styles.clock}>
      <div className={styles.wrapper}>
        <CircularProgressBar
          clockType={isTaskTimer}
          limit={currentTimer}
          percentage={time}
        />

        <div className={styles.display}>
          <ClockMessage
            message={isTaskTimer ? "Let's get to work!" : 'Time for a break...'}
          />
          <Timer input={time} />
        </div>
      </div>

      <div className={styles.buttons}>
        <Button status={isActive} onClickHandler={handleClick} />
      </div>
    </article>
  )
}
