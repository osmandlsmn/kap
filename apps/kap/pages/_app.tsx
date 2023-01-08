import { AppProps } from 'next/app';
import Head from 'next/head';
import SocketProvider from '../context/SocketContext';
import '../styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to kap!</title>
      </Head>
      <main className="h-screen">
        <SocketProvider>
          <Component {...pageProps} />
        </SocketProvider>
      </main>
    </>
  );
}

export default App;
