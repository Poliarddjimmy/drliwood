import '../styles/globals.css'
import { ToastProvider } from 'react-toast-notifications';
import { AudioPlayerProvider } from "react-use-audio-player"


function MyApp({ Component, pageProps }) {
  return (
    <AudioPlayerProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </AudioPlayerProvider>
  )
}

export default MyApp
