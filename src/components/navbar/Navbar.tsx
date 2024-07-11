'use client'

import React, { useState } from 'react'
import MaxWidthWrapper from '../Container'
import Image from 'next/image'
import { ChevronDown, CircleX, Menu, ShoppingCart, User } from 'lucide-react'
import { NavLinks, NavLinksMobile } from './NavLinks'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className='top-0 h-auto lg:h-[12.6rem] text-white sticky z-50 inset-x-0 bg-black'>
                <header className='relative h-full'>
                    <MaxWidthWrapper>
                        <div className='left-0 fixed pt-28 pl-6 cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                            {
                                open ? <CircleX /> : <Menu />
                            }
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-20 pt-6 lg:pt-10'>
                            <div className='flex-shrink-0 mb-4 lg:mb-0'>
                                <Image
                                    src={'/images/logo.webp'}
                                    alt='logo'
                                    width={300}
                                    height={150}
                                    className='w-46'
                                />
                            </div>
                            <div className='flex-1 mb-4 lg:mb-0'>
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className='px-6 w-full lg:w-[30rem] rounded-sm text-black py-3'
                                />
                            </div>
                            <div className='hidden lg:block'>
                                <div className='flex items-center gap-4 mb-4 lg:mb-0'>
                                    <User />
                                    <div className='flex gap-1 group-hover:text-pink-400 cursor-pointer items-center'>
                                        <span className='text-sm'>Entrar/Cadastrar</span>
                                        <ChevronDown className='w-4 h-4' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-4 mb-4'>
                                    <ShoppingCart />
                                    <div className='px-2 py-1 rounded-full bg-white'>
                                        <span className='text-red-500'>0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='w-full flex items-center gap-6 justify-center pt-10'>
                                <NavLinks />
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </header>
            </nav>
            <div className={`z-10 pt-20 bg-black fixed flex flex-col px-2 gap-4 w-72 h-screen duration-300 ${open ? 'left-0' : 'left-[-100%]'}`}>
                <NavLinksMobile />
            </div>
        </>
    )
}

export default Navbar
