import Head from 'next/head'

import Clock from '../components/Clock'
import Container from '../components/Container'
import Title from '../components/Title'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro Clock</title>
      </Head>

      <body>
        <Container>
          <Title appName={'Pomodoro Clock'} />
          <Clock />
        </Container>
      </body>
    </>
  )
}
