import Link from 'next/link';
import React from 'react';
import { navLink } from './NavLinks';

export default function NavLink({id, name, link, submenu, sublinks, pathName}:navLink) {
    return (
        <li>
            <Link 
            href={link} 
            className={(link === pathName ? 'bg-blue-800' : '') + " flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800"}>
                {name}
            </Link>
        </li>
    );
}

