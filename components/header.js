import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Logo from '../images/logo.png';

export default function Header({ isLoggedIn }) {
  return <div
      className='w-screen px-6 flex flex-row items-center justify-between
      bg-neutral-800 text-white'
      >
    <Link href='/'>
      <a className='flex flex-row items-center'>
        <Image
          src={Logo}
          width='50px'
          height='50px'
          className='block rounded-full'
          />
        <h1 id='brand' className='ml-2 font-bold'>JUET Overflow</h1>
      </a>
    </Link>

    <ul className='list-none flex flex-row justify-between w-80'>
      <li>
        <Link href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link href='/about'>
          About
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          Contact
        </Link>
      </li>
      {
        !isLoggedIn() ?
          <>
            <li>
              <Link href='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link href='/signup'>
                Register
              </Link>
            </li>
          </>
        : <Link href='/logout'>
          Logout
        </Link>
      }
    </ul>

    <div className='hidden md:hidden'>
      <button className='hamburger hamburger--emphatic fill-white' type='button'>
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
    </div>
  </div>;
}