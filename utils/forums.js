import axios from "axios";

export async function getForums() {
  const resp = await axios.get('/api/forums');
  return resp.data.forums;
}