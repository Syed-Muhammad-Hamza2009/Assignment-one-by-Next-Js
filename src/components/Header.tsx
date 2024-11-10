"use client";
import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div> 
      <nav className="bg-sky-400 text-black h-12 py-2 px-3 flex justify-between items-center">
        <div>
            <h1 className='hover:text-black'>
                <a href='#!'>TecLab</a>
            </h1>
        </div>
                

        <div>
            <ul className="flex space-x-5">
                <li><Link href="/" className='hover:text-black'>Home</Link></li>
                <li><Link href="about" className='hover:text-black'>About</Link></li>
                <li><Link href="contact" className='hover:text-black'>Contact</Link></li>
                <li><Link href="service" className='hover:text-black'>Service</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;

