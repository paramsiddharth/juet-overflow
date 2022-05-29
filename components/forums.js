import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getForums } from '../utils/forums';

export default function Forums() {
  const [forums, setForums] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getForums();
      setForums(data);
    })();
  });

  if (forums == null) {
    return 'Loading forums...';
  }

  return <>
    <div className="flex flex-row flex-wrap">
      {forums.map((f, k) => (
        <figure key={k} className="sm:basis-1 md:basis-1/2 lg:basis-1/3 items-center bg-slate-50 rounded-xl p-2 md:p-0 dark:bg-slate-600">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 border-4 rounded-xl">
            <Link href={'/forums/' + f.id}><button className="rounded-xl p-5 md:p-2 dark:bg-slate-700 text-white">{ f.name }</button></Link>
            <blockquote>
              <p className="text-sm font-medium text-purple-300">
                { f.desc }
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 p-1 dark:text-sky-400">
                Threads: { f.threads }
              </div>
              <div className="text-slate-700 p-1 dark:text-slate-500">
                ID: { f.id }
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  </>;
}