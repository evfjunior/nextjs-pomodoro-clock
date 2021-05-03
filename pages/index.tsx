import Head from 'next/head'

import Clock from '../components/Clock'
import Container from '../components/Container'
import Title from '../components/Title'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pomodoro Clock</title>
      </Head>

      <Container>
        <Title appName={'Pomodoro Clock'} />
        <Clock />
      </Container>
    </>
  )
}

export default Home
