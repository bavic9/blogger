import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuPost = ({ withImage }) => {
    return (
        <div className='flex flex-col w-full gap-8 my-6'>
            <Link className='flex items-center gap-5' href='/'>
                {withImage && (
                    <div className='aspect-square relative'>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className='rounded-[50%] object-cover h-12 w-12' />
                    </div>
                )}
                <div className='flex flex-col gap-1'>
                    <span className='py-1 px-2 rounded-xl text-xs w-max text-white bg-[#ff7857]'>Travel</span>
                    <h3 className='text-xl font-medium  text-[color:var(--softTextColor)]'>
                        Lorem ipsum, dolor sit
                    </h3>
                    <div className='text-lg'>
                        <span>John Doe</span>
                        <span> - 10.03.2024</span>
                    </div>
                </div>
            </Link>
            <Link className='flex items-center gap-5' href='/'>
                {withImage && (
                    <div className=' aspect-square relative'>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className='rounded-[50%] object-cover h-12 w-12' />
                    </div>
                )}
                <div className='flex flex-col gap-1'>
                    <span className='py-1 px-2 rounded-xl text-xs w-max text-white bg-[#ffb14f]'>Culture</span>
                    <h3 className='text-xl font-medium  text-[color:var(--softTextColor)]'>
                        Lorem ipsum, dolor sit
                    </h3>
                    <div className='text-lg'>
                        <span>John Doe</span>
                        <span> - 10.03.2024</span>
                    </div>
                </div>
            </Link>
            <Link className='flex items-center gap-5' href='/'>
                {withImage && (
                    <div className=' aspect-square relative'>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className='rounded-[50%] object-cover h-12 w-12' />
                    </div>
                )}
                <div className='flex flex-col gap-1'>
                    <span className='py-1 px-2 rounded-xl text-xs w-max text-white bg-[#7fb881]'>Food</span>
                    <h3 className='text-xl font-medium  text-[color:var(--softTextColor)]'>
                        Lorem ipsum, dolor sit
                    </h3>
                    <div className='text-lg'>
                        <span>John Doe</span>
                        <span> - 10.03.2024</span>
                    </div>
                </div>
            </Link>
            <Link className='flex items-center gap-5' href='/'>
                {withImage && (
                    <div className=' aspect-square relative'>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className='rounded-[50%] object-cover h-12 w-12' />
                    </div>
                )}
                <div className='flex flex-col gap-1'>
                    <span className='py-1 px-2 rounded-xl text-xs w-max text-white bg-[#ff7887]'>Fashion</span>
                    <h3 className='text-xl font-medium  text-[color:var(--softTextColor)]'>
                        Lorem ipsum, dolor sit
                    </h3>
                    <div className='text-lg'>
                        <span>John Doe</span>
                        <span> - 10.03.2024</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MenuPost;
