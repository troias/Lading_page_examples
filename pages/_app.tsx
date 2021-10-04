import '../styles/globals.css'
import Layout1 from "../components/layouts/layout-1/layout1"
import ContextStoreProvider from '../contextStore/contextStore'
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return <ContextStoreProvider> <CssBaseline><Layout1><Component {...pageProps} /></Layout1> </CssBaseline> </ContextStoreProvider>
}

export default MyApp
