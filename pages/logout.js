import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Logout({ removeToken, isLoggedIn }) {
  const [text, setText] = useState('Logging out...');
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      removeToken();
    } else {
      setText('Already logged out.');
    }
    router.push('/');
  });

  return <>{ text }</>;
};