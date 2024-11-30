import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';


const Navbar = () => {
  return (
    <div className='flex items-center justify-center h-[100px]'>
      <div className='hidden md:flex gap-[10px] flex-1'>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div>
      <div className='flex-1 items-center text-left md:text-center font-bold text-3xl lg:text-4xl'>Blogger</div>
      <div className='flex items-center justify-end md:justify-normal gap-4 lg:gap-5 flex-1 text-lg lg:text-xl'>
        <ThemeToggle/>
        <Link href='/' className='hidden md:block'>Homepage</Link>
        <Link href='/' className='hidden md:block'>Contact</Link>
        <Link href='/' className='hidden md:block'>About</Link>
        <AuthLinks/>
      </div>
    </div>
  );
}

export default Navbar;
