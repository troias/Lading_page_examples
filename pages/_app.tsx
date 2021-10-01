import '../styles/globals.css'
import Layout1 from "../components/layouts/layout-1/layout1"
import ContextStoreProvider from '../contextStore/contextStore'

function MyApp({ Component, pageProps }) {
  return <ContextStoreProvider><Layout1><Component {...pageProps} /></Layout1>  </ContextStoreProvider>
}

export default MyApp
