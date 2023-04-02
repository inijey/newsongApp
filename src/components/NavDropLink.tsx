'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { navLink } from './NavLinks';

export default function NavDropLink({id, name, link, submenu, sublinks, pathName}:navLink) {
    const [open, setOpen] = useState(false);
    const toggleButton = () => setOpen(!open);

    return (
        <li className="relative group">
            <button 
            className={(pathName.includes(link) ? 'bg-blue-800' : '') + " flex w-full px-4 py-2 font-medium text-white rounded-md outline-none focus:outline-none hover:bg-blue-800"}
            onClick={toggleButton}>
                {name}
            </button>
            {/* dropdown menu */}
            {
            <div className="hidden right-0 p-2 mt-1 bg-white rounded-md shadow lg:absolute group-hover:block">
                <ul className="space-y-2 lg:w-48">
                    {sublinks.map((sublink) =>
                        <li>
                            <a href={sublink.link} className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                                {sublink.name}
                            </a>
                        </li>
                    )}
                </ul>
            </div>}
      </li>
    );
}

