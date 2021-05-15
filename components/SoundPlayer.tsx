import { Dispatch, SetStateAction } from 'react'
import Sound from 'react-sound'

interface Props {
  status: string
  setAlarmStatus: Dispatch<SetStateAction<string>>
}

const SoundPlayer: React.FC<Props> = ({ status, setAlarmStatus }) => {
  const stopAlarm = () => {
    setAlarmStatus('STOPPED')
  }

  return (
    <Sound
      url={'assets/alarm_clock.mp3'}
      playStatus={status === 'STOPPED' ? 'STOPPED' : 'PLAYING'}
      onFinishedPlaying={stopAlarm}
    />
  )
}

export default SoundPlayer
