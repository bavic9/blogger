"use client"
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const ThemeToggle = () => {


    const { toggle, theme } = useContext(ThemeContext)

    return (
        <div
            className='flex items-center justify-between cursor-pointer w-12 h-6 rounded-[50px] relative'
            onClick={toggle}
            style={
                theme === "dark"
                ? {background: 'white'}
                : {background: "#0f172a"}
            }
        >
            <Image src='/moon.png' alt='' width={14} height={14} />
            <div
                className='w-5 h-5 rounded-full absolute'
                style={
                    theme === "dark"
                    ? {left: 1, background: '#0f172a'}
                    : {right: 1, background: "white"}
                }
            ></div>
            <Image src='/sun.png' alt='' width={14} height={14} />

        </div>
    );
}

export default ThemeToggle;
