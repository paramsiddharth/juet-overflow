import Head from 'next/head';
import useCookie from 'react-use-cookie';
// import styles from '../styles/Home.module.scss';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Forums from '../components/forums';
import Signupscreen from '../components/signupscreen';

export default function Home() {
  const [token, setToken] = useCookie('token');

  const isLoggedIn = () => !!token;

  return <div>
      <Head>
        <html lang='en' />
        <title>JUET Overflow</title>
        <meta name='description' content='JUET Overflow is a discussion board for JUET students from all years and branches.' />
      </Head>
    <Header token={token} setToken={setToken} isLoggedIn={isLoggedIn} />
    <Signupscreen />
    <Footer />
  </div>;
}
