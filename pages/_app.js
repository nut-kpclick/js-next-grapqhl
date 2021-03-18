import '../styles/globals.css'
import 'antd/dist/antd.css';
import AppLayout from '../components/layout'
// main
function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
