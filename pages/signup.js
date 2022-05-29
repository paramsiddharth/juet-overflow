import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.scss';

import Signupscreen from '../components/signupscreen';
import Main from '../components/main';
import { signUp } from '../utils/auth';

export default function SignUp({ setToken, isLoggedIn }) {
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
    <Signupscreen onSignUp={signUp({ setToken })} />
  </Main>;
}
