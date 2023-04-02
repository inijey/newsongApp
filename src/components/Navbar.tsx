'use client'
import React from 'react';
import NavLinks from './NavLinks';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { useContext } from 'react';
import { NavStateContext } from '@/app/context/NavStateContext';

export default function Navbar() {  
    const {open, toggleNavState} = useContext(NavStateContext);

    return (
      <nav className="bg-blue-700 shadow-md">
        {/* <!-- container --> */}
        <div className="container flex flex-wrap justify-between px-4 py-2 mx-auto lg:space-x-4">
          {/* <!-- brand --> */}
          <a href="/" className="inline-flex p-2 text-xl font-bold tracking-wider text-white">NewSong</a>
          {/* <!-- toggler btn --> */}
          <button 
          className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none"
          onClick={toggleNavState}>
            {open ? <CgClose/> : <FiMenu/>}
          </button>
          {/* <!-- menu --> */} 
          <ul className='lg:flex hidden'>
            <NavLinks />
          </ul>
        </div>
        
        {/* Mobile nav menu */}
        <div className="lg:hidden px-4">
          {open && <NavLinks/>}
        </div>

      </nav>
    );



  }

