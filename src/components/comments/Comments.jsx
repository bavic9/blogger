"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import useSWR from 'swr';
import Link from 'next/link';
import React, { useState } from 'react';


const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
}

const Comments = ({ postSlug }) => {

    const { status } = useSession();


    const { data, mutate, isLoading } = useSWR(
        `https://blogger-omega-lovat.vercel.app/api/comments?postSlug=${postSlug}`,
        // `http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    );


    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug })
        });
        mutate();
    }

    return (
        <div className='mt-12'>
            <h1 className='text-[color:var(--softTextColor)] mb-7 text-2xl font-bold'>Comments</h1>
            {status === "authenticated" ? (
                <div className='flex items-center justify-between gap-7 lg:w-[95%]'>
                    <textarea
                        placeholder='write a comment...'
                        className='p-5 w-full rounded-md border-[1px] border-[color:var(--textColor)]'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button
                        className='py-4 px-5 bg-teal-600 text-white border-none font-bold rounded-md cursor-pointer'
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                </div>
            ) : (
                <Link className='text-red-600' href='/login'>Login to write a comment</Link >
            )}
            <div className='mt-12'>
                {isLoading
                    ? "loading"
                    : data?.map((item) => (
                        <div className='mb-12' key={item._id}>
                            <div className='flex items-center gap-5 mb-5'>
                                {item?.user?.image &&
                                    <Image
                                        src={item.user.image}
                                        alt=''
                                        width={50}
                                        height={50}
                                        className='rounded-[50%] h-12 w-12 object-cover'
                                    />
                                }
                                <div className='flex flex-col gap-1 text-[color:var(--softTextColor)]'>
                                    <span className='font-medium'>{item.user.name}</span>
                                    <span className='text-sm'>{item.createdAt.substring(0, 10)}</span>
                                </div>
                            </div>
                            <p className='lg:text-lg text-base font-light'>
                                {item.desc}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Comments;

