import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

interface ArcProps {
  clockType: boolean
  limit: number
  percentage: number
}

export default function Arc({ clockType, limit, percentage }: ArcProps) {
  return (
    <CircularProgressbar
      maxValue={limit}
      value={percentage}
      strokeWidth={4}
      styles={buildStyles({
        rotation: 0,
        pathTransitionDuration: 0.75,
        pathColor: clockType ? '#7C4DFF' : '#64FFDA',
        strokeLinecap: 'round',
        trailColor: '#424242'
      })}
    />
  )
}
