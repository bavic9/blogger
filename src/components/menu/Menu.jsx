import Image from 'next/image';
import React from 'react';
import MenuPost from '../menuPost/MenuPost';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className='flex-[2] mt-6 w-full flex flex-col'>
      <h2 className='text-gray-500 text-sm font-normal'>{"What's hot"}</h2>
      <h1 className=' text-xl'>Most Popular</h1>
      <MenuPost withImage={false}/>
      <h2 className='text-gray-500 text-sm font-normal'>Discover by topic</h2>
      <h1 className=' text-xl'>Categories</h1>
      <MenuCategories/>
      <h2 className='text-gray-500 text-sm font-normal'>Chosen by the editor</h2>
      <h1 className=' text-xl'>Edditors Pick</h1>
      <MenuPost withImage={true}/>
    </div>
  );
}

export default Menu;
