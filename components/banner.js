import Image from 'next/image';

import Logo from '../images/logo.png';

export default function Banner() {
  return <main className="bg-slate-800 text-gray-100 text-center pt-3">
	  <h1 className="text-6xl font-bold">Welcome to JUET Overflow!</h1>

    <Image
      src={Logo}
      width='180px'
      height='180px'
      className='block rounded-md'
      />

    <p className='pt-8 text-xl pb-9'>
      JUET Overflow makes it easier for JUETians to connect and interact
      on topics and have collaborative discussions.
    </p>
  </main>;
}