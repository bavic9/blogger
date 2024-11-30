"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage = () => {

  const { data, status } = useSession();

  console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }



  return (
    <div className='flex items-center justify-center mt-14'>
      <div className='bg-[color:var(--softBg)] p-8 lg:py-36 md:py-12 lg:px-52 md:px-24 flex flex-col gap-12 rounded-xl'>
        <div
          className='p-5 rounded-md border-none font-normal text-center text-sm md:text-lg md:font-bold cursor-pointer bg-[#ff5555]'
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className='p-5 rounded-md border-none font-normal text-center text-sm md:text-lg md:font-bold cursor-pointer bg-[#111]'>Sign in with Github</div>
        <div className='p-5 rounded-md border-none font-normal text-center text-sm md:text-lg md:font-bold cursor-pointer bg-[#887bea]'>Sign in with Facebook</div>
      </div>
    </div>
  );
}

export default LoginPage;
