export default function Header() {
  return <div
      className='w-screen px-6 flex flex-row items-center justify-between \
      bg-neutral-800 text-white'
      >
    <a href='/' className=''>
      <h1 id='brand' className='font-bold'>JUET Overflow</h1>
    </a>

    <ul className='list-none flex flex-row justify-between w-52'>
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
    </ul>

    <div className='md:hidden'>
      <button class='hamburger hamburger--emphatic fill-white' type='button'>
        <span class='hamburger-box'>
          <span class='hamburger-inner'></span>
        </span>
      </button>
    </div>
  </div>;
}
