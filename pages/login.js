import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.scss';

import Loginscreen from '../components/loginscreen';
import Main from '../components/main';
import { login } from '../utils/auth';

export default function Login({ token, setToken, isLoggedIn }) {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push('/');
    }
  });

  return <Main isLoggedIn={isLoggedIn}>
    <Head>
      <title>Login - JUET Overflow</title>
    </Head>
    <Loginscreen onLogin={login({ setToken })} />
  </Main>;
}
