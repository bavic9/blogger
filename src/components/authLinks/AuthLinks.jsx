"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href='/login' className="hidden md:flex">Login</Link>
      ) : (
        <>
          <Link href='/write' className="hidden md:flex">Write</Link>
          <span className="cursor-pointer hidden md:flex" onClick={signOut}>Logout</span>
        </>
      )}
      <div
        className="w-5 h-4 flex md:hidden justify-between flex-col cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-[2px] bg-[color:var(--textColor)]"></div>
        <div className="w-full h-[2px] bg-[color:var(--textColor)]"></div>
        <div className="w-full h-[2px] bg-[color:var(--textColor)]"></div>
      </div>

      {open && (
        <div className="absolute top-[100px] bg-[color:var(--bg)] left-0 h-[calc(80vh-100px)] w-full flex flex-col items-center justify-center gap-12 text-2xl z-[999]">
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === 'unauthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <span className="cursor-pointer" onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
