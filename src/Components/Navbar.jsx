import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import tym from '../assets/tym.svg'
const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/service" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full top-0 left-0'>
            <nav className="border-gray-200 dark:bg-zinc-800">

                <div className='md:flex items-center justify-between  dark:bg-zinc-800 dark:text-white lg:ml-11 py-4 md:px-10 px-7'>
                    {/* logo section */}
                    
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                    {/* linke items */}
                    <ul className={`md:flex md:items-center md:pb-0  dark:text-white pb-12 absolute md:static md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={''} className='md:ml-8 md:my-0 my-7 '>
                                    <a href={link.link} className='text-gray-800  md:dark:text-white hover:text-red-400 duration-500'>{link.name}</a>
                                </li>))
                        }
                        <button className='md:ml-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300'>Get Started</button>
                    </ul>
                    {/* button */}
                </div>
            </nav>

        </div>
    );
};

export default Navbar;