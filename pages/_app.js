import { useState } from 'react';
import { getCookie, setCookies } from 'cookies-next';

import '../styles/globals.css';
import '../styles/globals.scss';
import 'normalize.css';

export default function MyApp({ Component, pageProps, token: serverToken }) {
  const [token, setTokenState] = useState(serverToken);

  const setToken = newToken => {
    setTokenState(newToken);
    setCookies('token', newToken);
  };

  const isLoggedIn = () => !!token;

  return <Component {...pageProps} token={token} setToken={setToken} isLoggedIn={isLoggedIn} />;
}

export function getServerSideProps({ req, res }) {
  const token = getCookie('token', { req, res });
  return {
    props: {
      token
    }
  };
}
