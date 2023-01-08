import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to kap!</title>
      </Head>
      <main className="app bg-red-500">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
