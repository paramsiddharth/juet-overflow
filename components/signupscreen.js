import { useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaArrowLeft } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

import Logo from '../images/logo.png';

export default function Signupscreen({ onSignUp }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const onSignUpCustom = e => {
    e.preventDefault();
    
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    onSignUp({ email, password });
  };

  return <>
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center my-32'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
          <div className='text-left font-bold flex flex-row items-center'>  
            <Image
              src={Logo}
              width='50px'
              height='50px'
              className='block rounded-full'
            />
            <span className='text-slate-800 mx-1'>JUET</span> Overflow
          </div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-slate-800 mb-2'>Sign up to JUET Overflow</h2>
            <div className='border-2 w-10 border-slate-800 inline-block mb-2'></div>
            <div className='flex justify-center my-2'>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaLinkedinIn className='text-sm' />
              </a>
              <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaGoogle className='text-sm' />
              </a>
            </div>
            <p className='text-gray-400 my-3'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-gray-400 m-2' />
                <input ref={emailRef} type="email" name='email' placeholder='JUET Email' className='bg-gray-100 outline-none text-sm flex-1' />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-2'>
                <MdLockOutline className='text-gray-400 m-2' />
                <input ref={passwordRef} type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
              </div>
              {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-2'>
                <MdLockOutline className='text-gray-400 m-2' />
                <input type="password" name='password' placeholder='Confirm Password' className='bg-gray-100 outline-none text-sm flex-1' />
              </div> */}
              <a onClick={onSignUpCustom} href="#" className='border-2 border-slate-800 text-slate-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-slate-800 hover:text-white'>Sign Up</a>
            </div>
          </div>
        </div>
        <div className='w-2/5 bg-slate-800 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
          <p className='mb-10'>Fill up personal information and start journery with us.</p>
          <FaArrowLeft className='text-white text-2xl text-center mx-32' />
        </div>
      </div>
    </main>
  </>
}