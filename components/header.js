import Image from 'next/image';

import Logo from '../images/logo.png';

export default function Header({ token, setToken, isLoggedIn }) {

  const login = e => {
    e.preventDefault();

    setToken('123');
  };

  const logout = e => {
    e.preventDefault();

    setToken('');
  };

  return <div
      className='w-screen px-6 flex flex-row items-center justify-between
      bg-neutral-800 text-white'
      >
    <a href='/' className='flex flex-row items-center'>
      <Image
        src={Logo}
        width='50px'
        height='50px'
        className='block rounded-full'
        />
      <h1 id='brand' className='ml-2 font-bold'>JUET Overflow</h1>
    </a>

    <ul className='list-none flex flex-row justify-between w-60'>
      <li>
        <a href='/'>
          Home
        </a>
      </li>
      <li>
        <a href='/about'>
          About
        </a>
      </li>
      <li>
        <a href='/contact'>
          Contact
        </a>
      </li>
      <li>
        {
          !isLoggedIn() ? 
            <a onClick={login} href='/login'>
              Login
            </a>
          : <a onClick={logout} href='/logout'>
              Logout
            </a>
        }
      </li>
    </ul>

    <div className='hidden md:hidden'>
      <button class='hamburger hamburger--emphatic fill-white' type='button'>
        <span class='hamburger-box'>
          <span class='hamburger-inner'></span>
        </span>
      </button>
    </div>
  </div>;
}
