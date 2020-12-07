import '../src/styles/reset.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <title>BitRate</title>;
  return (
    <>
      <Head>
        <title>BitRate</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
