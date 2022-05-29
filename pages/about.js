import Head from 'next/head';
// import styles from '../styles/Home.module.scss';

import Main from '../components/main';

export default function About({ isLoggedIn }) {

  return <Main isLoggedIn={isLoggedIn}>
      <Head>
        <html lang='en' />
        <title>About - JUET Overflow</title>
        <meta name='description' content='JUET Overflow is a discussion board for JUET students from all years and branches.' />
      </Head>
    
  </Main>;
}