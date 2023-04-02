'use client'

import { createContext, useState } from "react";

type ContextProps = {
    open: Boolean;
    toggleNavState: () => void;
}

interface Props {
    children: JSX.Element | JSX.Element[];
} 

export const NavStateContext = createContext<ContextProps>({
    open: false,
    toggleNavState: () => {
        return null;
    }
});

export function NavStateProvider({children}: Props){
    const [open, setOpen] = useState(false);
    const toggleNavState = () => setOpen(!open);

    return (
        <NavStateContext.Provider value={{open, toggleNavState}}>
            {children}
        </NavStateContext.Provider>
    );
}
