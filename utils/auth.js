import axios from 'axios';

export function login({ setToken }) {
  return async ({ email, password }) => {
    try {
      const resp = await axios.post('/api/login', { email, password }, { withCredentials: true });
      if ('x-cookie' in resp.headers) {
        setToken(resp.headers['x-cookie']);
      }
    } catch (e) {
      console.error(e);
      alert('Failed to login.');
    }
  };
};

export function signUp({ setToken }) {
  return login({ setToken });
}

/* export function getServerSideProps_({ req, res }) {
  const token = getCookie('token', { req, res });

  return {
    props: {
      serverToken: token ?? null
    }
  };
}

export function getAuthUtils(serverToken) {
  const [token, setTokenState] = useState(serverToken);

  const setToken = newToken => {
    setCookies('token', newToken);
    setTokenState(newToken);
  };

  const isLoggedIn = !!token;

  return {
    token,
    setToken,
    isLoggedIn
  };
} */