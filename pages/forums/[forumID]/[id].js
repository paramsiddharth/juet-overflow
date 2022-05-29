import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Main from '../../../components/main';

const Thread = ({ isLoggedIn }) => {
  const router = useRouter();
  const { forumID, id } = router.query;

  const [thread, setThread] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/api/forums/' + forumID + '/' + id);
      setThread(resp.data);
    })();
  });

  if (thread == null) {
    return <Main isLoggedIn={isLoggedIn}>
      <Head>
        <title>{ forumID } / { id } - JUET Overflow</title>
      </Head>
      Loading thread...
    </Main>;
  }

  return <Main isLoggedIn={isLoggedIn}>
    <Head>
      <title>{ thread.forumName } / { thread.title } - JUET Overflow</title>
    </Head>
    <main className="bg-slate-800 text-gray-100 text-center pt-3">
      <h1 className="text-6xl font-bold">{ thread.title }</h1>

      <p className='text-left px-2 pt-5 text-base bg-white text-black pb-9'>
        { thread.text }
      </p>
    </main>;
  </Main>;
}

export default Thread;