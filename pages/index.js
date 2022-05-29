import Head from 'next/head';
// import styles from '../styles/Home.module.scss';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Forums from '../components/forums';
import Main from '../components/main';

export default function Home({ token, setToken, isLoggedIn }) {

  return <Main isLoggedIn={isLoggedIn}>
      <Head>
        <html lang='en' />
        <title>{ !isLoggedIn() ? 'Home' : 'Forums' } - JUET Overflow</title>
        <meta name='description' content='JUET Overflow is a discussion board for JUET students from all years and branches.' />
      </Head>
    {
      !isLoggedIn() ? <Banner /> : <Forums />
    }
  </Main>;
}