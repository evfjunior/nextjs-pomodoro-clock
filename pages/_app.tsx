import '../styles/globals.scss'
import { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
