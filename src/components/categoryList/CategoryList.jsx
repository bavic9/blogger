import Image from 'next/image';
import Link from 'next/link';
import styles from "./categoryList.module.css";
import React from 'react';


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

const CategoryList = async () => {

  const data = await getData();

  return (
    <div className='flex flex-col space-y-8 mt-10'>
      <h1 className='text-3xl md:text-4xl font-bold'>Popular Categories</h1>
      <div className='flex flex-wrap justify-between gap-5'>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${'flex items-center justify-center gap-[10px] h-20 w-[100%] md:w-[45%] lg:w-[15%] rounded-xl'} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=''
                height={32}
                width={32}
                className=' rounded-[50%] h-10 w-10'
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
