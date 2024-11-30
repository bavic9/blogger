'use client'
import React from 'react';
import Image from "next/image";
import { useState } from "react";
import ReactQuill from 'react-quill';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/")
  }



  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className='p-12 text-6xl border-none outline-none bg-transparent w-full placeholder:text-[#b3b3b1]'
      />
      <div className='flex gap-5 h-[500px] relative'>
        <button className='w-9 h-9 rounded-[50%] bg-transparent border border-solid border-[color:var(--textColor)] flex items-center justify-center cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className='flex gap-5 bg-[color:var(--bg)] absolute z-[999] w-full left-12'>
            <input
              type='file'
              id='image'
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <button className='w-9 h-9 rounded-[50%] bg-transparent border border-solid border-[color:var(--textColor)] flex items-center justify-center cursor-pointer border-[#1a8917]'>
              <label htmlFor="image">
                <Image src='/image.png' alt="" width={16} height={16} />
              </label>
            </button>
            <button className='w-9 h-9 rounded-[50%] bg-transparent border border-solid border-[color:var(--textColor)] flex items-center justify-center cursor-pointer border-[#1a8917]'>
              <Image src='/external.png' alt="" width={16} height={16} />
            </button>
            <button className='w-9 h-9 rounded-[50%] bg-transparent border border-solid border-[color:var(--textColor)] flex items-center justify-center cursor-pointer border-[#1a8917]'>
              <Image src='/video.png' alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className='w-full'
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className='absolute lg:top-[37px] top-[100px]  right-6 py-2 px-5 border-none bg-[#1a8917] text-white cursor-pointer rounded-3xl'>Publish</button>
    </div>
  );
}

export default WritePage;
