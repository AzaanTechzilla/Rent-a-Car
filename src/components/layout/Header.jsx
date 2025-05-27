'use client'
import { links } from '@/constants/appdata'
import Link from 'next/link'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)
    const pathname = usePathname();

  return (
    <div className='bg-white shadow-lg color-background h-16 flex justify-between items-center  px-3 md:px-[10%]'>
        <Link href={`/`} className='text-third-color font-bold text-2xl'>Car Rent</Link>
        <div className='md:hidden flex flex-col gap-1' onClick={()=> setIsMenu(!isMenu)}>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
        </div>
        <div className={`${isMenu ? " flex flex-col absolute w-full top-16 ": "hidden md:flex"} items-center gap-5 md:flex-row md:static top-16 bg-white w-full md:w-auto text-center `}>
            {links?.map((items)=>(
                <div key={items.link}>
                    <Link className={`${pathname === items.link ? "text-third-color": 'text-gray-400'}`} href={`${items.link}`}>
                   <span> {items.text}</span>
                    </Link>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Header
