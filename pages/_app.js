import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { useState } from 'react';

import '../styles/globals.css';
import '../styles/globals.scss';
import 'normalize.css';

function MyApp({ Component, pageProps, serverToken }) {
  const [token, setTokenState] = useState(serverToken);

  const setToken = newToken => {
    setCookies('token', newToken);
    setTokenState(newToken);
  };

  const removeToken = () => {
    removeCookies('token');
    setTokenState(null);
  };

  const isLoggedIn = () => !!token;

  return <Component {...pageProps} token={token} setToken={setToken} removeToken={removeToken} isLoggedIn={isLoggedIn} />;
}

MyApp.getInitialProps = async ({ ctx: { req, res } }) => {
  const token = getCookie('token', { req, res });

  return {
    serverToken: token ?? null
  };
};

export default MyApp;