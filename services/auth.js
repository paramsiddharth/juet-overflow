import { getCookie } from "react-use-cookie";

export function isLoggedIn() {
  console.log(JSON.stringify(getCookie('token')));
  
  return !!getCookie('token');
}