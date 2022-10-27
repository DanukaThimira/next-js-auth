import NavBar from '../components/NavBar'
import '../styles/globals.css'
import '../components/NavBar.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
    <NavBar />
    <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp
