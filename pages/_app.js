import '../styles/globals.css';
import Head from 'next/head';
import NavBar from './component/shared/NavBar';
import Footer from './component/shared/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ background: '#f5faff' }}>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="author" content="dhilipkmr"></meta>
        <title>Ms.Elegant | Bridal Makeover, Makeup Artists in Coimbatore</title>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp
