import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.scss';

import Signupscreen from '../components/signupscreen';
import Main from '../components/main';

export default function SignUp({ token, setToken, isLoggedIn }) {
  const router = useRouter();

  if (isLoggedIn()) {
    router.push('/');
  }

  return <Main isLoggedIn={isLoggedIn}>
    <Head>
      <title>Register - JUET Overflow</title>
    </Head>
    <Signupscreen/>
  </Main>;
}