// pages/_app.tsx
import { Provider } from 'react-redux'
import { store } from '../redux/store' // Importe a store configurada

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp