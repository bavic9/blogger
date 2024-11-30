import Image from 'next/image';
import React from 'react';

const Featured = () => {
  return (
    <div className=' mt-8'>
      <h1 className=' text-4xl md:text-8xl'>
        <b>Hey, Blogger here!</b> Discover my stories and creative
      </h1>
      <div className=' mt-16 lg:flex items-center gap-12'>
        <div className=' flex-1 h-[300px] lg:h-[400px] w-full relative'>
          <Image src='/p1.jpeg' alt='' fill className=' object-cover rounded-md' />
        </div>
        <div className='flex flex-1 flex-col gap-5 mt-5'>
          <h1 className='text-3xl lg:text-4xl'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
          <p className='text-lg lg:text-2xl font-light text-[color:var(--softTextColor)]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dignissimos vero est praesentium 
            ipsam maxime laudantium blanditiis aspernatur possimus, tempora molestias exercitationem neque 
            repellendus quasi omnis. Iusto nulla laudantium quibusdam fugit eaque?
          </p>
          <button className='px-4 py-3 rounded-md w-max bg-[color:var(--softTextColor)] mb-4 md:mb-0'>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
