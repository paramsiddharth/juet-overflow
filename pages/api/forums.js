import { all } from '../../data/forums';

export default function forums(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        return res.json({ forums: all });
      }
      default:
        return res.status(sc.BAD_REQUEST).send('Request method not supported!');
    }
  } catch (e) {
    console.error(e);
    return res.status(sc.INTERNAL_SERVER_ERROR).send('Request failed!');
  }
}