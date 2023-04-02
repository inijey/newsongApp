'use client'
import React from 'react';

type ButtonProps = {
    text: string;
    onClick: () => void;
}

export default function Button({text, onClick}: ButtonProps) {
    return (
        <button 
            className='bg-brand w-full py-2 px-4 text-white rounded-md hover:brightness-110' 
            onClick={onClick}>
             {text}
        </button>
    );
}

