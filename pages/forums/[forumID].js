import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Main from '../../components/main';

const Forum = ({ isLoggedIn }) => {
  const router = useRouter();
  const { forumID: id } = router.query;

  const [forum, setForum] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/api/forums/' + id);
      setForum(resp.data);
    })();
  });

  if (forum == null) {
    return <Main isLoggedIn={isLoggedIn}>
      <Head>
        <title>{ id } - JUET Overflow</title>
      </Head>
      Loading forum...
    </Main>;
  }

  return <Main isLoggedIn={isLoggedIn}>
    <Head>
      <title>{ id } - JUET Overflow</title>
    </Head>
    <main className="bg-slate-800 text-gray-100 text-center pt-3">
      <h1 className="text-6xl font-bold">{ forum.forum.name }</h1>

      <p className='pt-5 text-xl pb-9'>
        { forum.forum.desc }
      </p>

      <div className='text-left px-2 py-3'>
        {
          forum.forum.threads > 0 ?
          forum.threads.map((t, i) => (
            <div className='my-2 py-3 px-2 bg-slate-900'>
              <h3 className='text-xl text-red-400'>
                <Link href={'/forums/' + id + '/' + t.id}>
                  { t.title }
                </Link>
              </h3>
              <p className='text-fuchsia-500'>
                { t.text.slice(0, 200) + '...' }
              </p>
            </div>
          ))
          : <i>No threads to see.</i>
        }
      </div>
    </main>;
  </Main>;
}

export default Forum;