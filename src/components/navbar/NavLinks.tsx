import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react'

export const NavLinks = () => {
    return (
        <>
            {NavItems.map((item, index) => {
                return (
                    <Link key={index} href={item.href}>
                        <div className='px-4 py-2 bg-red rounded-sm font-roboto text-sm'>
                            <span className='text-sm'>{item.label}</span>
                        </div>
                    </Link>
                );
            })}
        </>
    )
}

export const NavLinksMobile = () => {
    return (
        <>
            {NavItems.map((item, index) => {
                return (
                    <Link key={index} href={item.href}>
                        <div className=' px-4 py-2 rounded-sm transition duration-300 group hover:bg-white bg-opacity-60'>
                            <span className='font-semibold text-sm text-white group-hover:text-black'>
                                {item.label}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </>
    )
}