import Head from 'next/head';
// import styles from '../styles/Home.module.scss';

import Header from '../components/header';

export default function Home() {
  return <div>
      <Head>
        <html lang='en' />
        <title>JUET Overflow</title>
        <meta name='description' content='JUET Overflow is a discussion board for JUET students from all years and branches.' />
      </Head>
    <Header />
  </div>;
}
