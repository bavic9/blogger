import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-4 py-10 md:flex md:flex-col lg:flex-row justify-between text-[color:var(--softTextColor)]'>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <Image src='/logo.png' alt='' width={50} height={50} />
          <h1 className='text-2xl'>Blogger</h1>
        </div>
        <p className='font-light'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti est dolorem distinctio
          voluptatum! Optio laborum voluptas suscipit ipsum porro nostrum deleniti dolore consectetur,
          sapiente autem at, voluptatum placeat itaque odit. Veniam, nulla.
        </p>
        <div className='mt-2 flex gap-2'>
          <Image src='/facebook.png' alt='facebook' width={18} height={18} />
          <Image src='/instagram.png' alt='instagram' width={18} height={18} />
          <Image src='/tiktok.png' alt='tiktok' width={18} height={18} />
          <Image src='/youtube.png' alt='youtube' width={18} height={18} />
        </div>
      </div>
      <div className='flex-1 md:flex md:justify-between md:text-xl lg:justify-end mt-6 md:mt-10 lg:mt-0 gap-24'>
        <div className='flex flex-col gap-2 font-light'>
          <span className='font-bold'>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>About</Link>
        </div>
        <div className='flex flex-col gap-2 mt-6 md:mt-0 font-light'>
          <span className='font-bold'>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className='flex flex-col gap-2 mt-6 md:mt-0 font-light'>
          <span className='font-bold'>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
