import Link from 'next/link';
import React from 'react';

const MenuCategories = () => {
  return (
    <div className='mt-9 mb-14 flex flex-wrap gap-5'>
        <Link
          href='/blog?cat=style'
          className='py-[10px] px-6 rounded-xl text-sm flex justify-center bg-[#57c4ff31] w-[45%] lg:w-[25%]'
        >
          style
        </Link>
        <Link
          href='/blog?cat=fashion'
          className='py-[10px] px-6 rounded-xl text-sm flex justify-center bg-[#da85c731] w-[45%] lg:w-[25%]'
        >
          fashion
        </Link>
        <Link
          href='/blog?cat=food'
          className='py-[10px] px-6 rounded-xl text-sm flex justify-center bg-[#7fb88133] w-[45%] lg:w-[25%]'
        >
          food
        </Link>
        <Link
          href='/blog?cat=travel'
          className='py-[10px] px-6 rounded-xl text-sm flex justify-center bg-[#ff795736] w-[45%] lg:w-[25%]'
        >
          travel
        </Link>
        <Link
          href='/blog?cat=culture'
          className='py-[10px] px-6 rounded-xl text-sm flex justify-center bg-[#ffb84f45] w-[45%] lg:w-[25%]'
        >
          culture
        </Link>
        <Link
          href='/blog?cat=coding'
          className='py-[10px] px-6 rounded-xl text-sm flex justify-center bg-[#5e4fff31] w-[45%] lg:w-[25%]'
        >
          coding
        </Link>
      </div>
  );
}

export default MenuCategories;
