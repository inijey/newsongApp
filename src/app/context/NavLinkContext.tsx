'use client'
import { createContext, useState } from "react";

type sublink = {
    name: string;
    link: string;
};

type navItem = {
    id: string;
    name: string; 
    link: string;
    submenu: Boolean;
    sublinks: sublink[];
};

interface Props {
    children: JSX.Element | JSX.Element[];
}  

export const NavLinkContext = createContext<navItem[]>([]);

export function NavLinkProvider({children}: Props){
    const [NavLinks, setNavLinks] = useState([
        {
            id: '1',
            name: '인적정보', 
            link: '',
            submenu: true,
            sublinks: [
                {name:'등록', link:'/m/info/new'},
                {name:'보기', link:'/m/info/view'},
                {name:'수정', link:'/m/info/modify'}
            ]
        }, 
        {
            id: '2',
            name: '주간보고', 
            link: '',
            submenu: true,
            sublinks: [
                {name:'등록', link:'/m/weeklyreport/new'},
                {name:'보기', link:'/m/weeklyreport/view'}
            ]
        }
    ]);

    return (
        <NavLinkContext.Provider value={NavLinks}>
            {children}
        </NavLinkContext.Provider>
    );
}
