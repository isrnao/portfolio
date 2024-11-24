// src/pages/_app.tsx

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import MouseStalker from '../components/MouseStalker';  // Import MouseStalker
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MouseStalker />  {/* Add MouseStalker */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;


//import React from 'react'; // 手動で追加
//import '@/styles/globals.css';
//import type { AppProps } from 'next/app';
//export default function App({ Component, pageProps }: AppProps) {
//  return <Component {...pageProps} />;
//}
