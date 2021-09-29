import '../styles/globals.css'
import Layout1 from "../components/layouts/layout-1/layout1"

function MyApp({ Component, pageProps }) {
  return <Layout1><Component {...pageProps} /></Layout1>
}

export default MyApp
