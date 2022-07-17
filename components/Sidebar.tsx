import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className='bg-[#1a1a1a] h-screen top-0 left-0 w-1/6 flex flex-col '>
      <div className='logo flex items-center justify-center'>
        <Image
          src='/logo.png'
          alt='MovieLogo'
          width={200}
          height={200}
          layout='fixed'
          className='mx-auto rounded-full'
        />
      </div>

      <ul className='mt-5 flex flex-col text-[#ebebeb] text-xl font-serif space-y-3 pl-5'>
        <li className='headerLink'>Home</li>
        <li className='headerLink'>Tv Shows</li>
        <li className='headerLink'>Movies</li>
        <li className='headerLink'>Popular</li>
        <li className='headerLink'>My List</li>
        <Link href='login'>
          <a>Sign In</a>
        </Link>
      </ul>
    </nav>
  );
}
