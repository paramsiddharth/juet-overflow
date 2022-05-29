import jwt from 'jsonwebtoken';
import { statusCode as sc } from 'statushttp';
import { getCookie, removeCookies, setCookies } from 'cookies-next';

const SECRET = process.env.SECRET ?? 'juet-overflow';

export default function login(req, res) {
  try {
    switch (req.method) {
      case 'POST': {
        const cookie = getCookie('token', { req, res });
  
        if (cookie != null) {
          return res.status(sc.OK).send('Already logged in.');
        }
  
        const { email, password } = req.body;
        const token = jwt.sign({ email, password }, SECRET);
  
        setCookies('token', token, { req, res });
        res.setHeader('Access-Control-Expose-Headers', 'X-Cookie').setHeader('X-Cookie', token);
        return res.status(sc.OK).send('Logged in!');
      }
      case 'DELETE': {
        const cookie = getCookie('token', { req, res });

        if (cookie == null) {
          return res.status(sc.OK).send('Already logged out.');
        }
        
        removeCookies('token', { req, res });
        return res.status(sc.OK).send('Logged out!');
      }
      default:
        return res.status(sc.BAD_REQUEST).send('Request method not supported!');
    }
  } catch (e) {
    console.error(e);
    return res.status(sc.INTERNAL_SERVER_ERROR).send('Failed to login.');
  }
}