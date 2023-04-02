import React from 'react';
import NavDropLink from './NavDropLink';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

type sublink = {
    name: string;
    link: string;
};

export type navLink = {
    id: string;
    name: string; 
    link: string;
    submenu: Boolean;
    sublinks: sublink[];
    pathName: string;
};

export default function NavLinks() {
    const pathName = usePathname();
    console.log(pathName);

    const navLinks = [
        {
            id: '1',
            name: '인적정보', 
            link: '/member',
            submenu: true,
            sublinks: [
                {name:'등록', link:'/member/new'},
                {name:'보기', link:'/member'},
                {name:'수정', link:'/member/edit'}
            ]
        }, 
        {
            id: '2',
            name: '주간보고', 
            link: '/report',
            submenu: true,
            sublinks: [
                {name:'등록', link:'/report/new'},
                {name:'보기', link:'/report'}
            ]
        },
        {
            id: '3',
            name: 'NavLink', 
            link: '/',
            submenu: false,
            sublinks: []
        }
    ];
    
    return (
        <div className="w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0">
            <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
                {
                    navLinks.map( i => 
                        i.submenu && <NavDropLink id={i.id} name={i.name} link={i.link} submenu={i.submenu} sublinks={i.sublinks} pathName={pathName}/>
                        ||
                        !(i.submenu) && <NavLink id={i.id} name={i.name} link={i.link} submenu={i.submenu} sublinks={i.sublinks} pathName={pathName}/>
                    )
                }
            </ul>
        </div>
    );
}

