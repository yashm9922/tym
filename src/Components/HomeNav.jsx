import React from 'react'
import pro from '../assets/profilepic.jpg'
const HomeNav = () => {
    const collegename = {
        background: "linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
    return (
        <>
            <>
                <nav className="bg-white w-full hidden fixed border-gray-200 dark:bg-zinc-900">
                    {/* <!-- Upper Navbar --> */}
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                <h1 className="text-3xl font-bold" style={collegename}>JSPM RSCOE</h1>
                            </span>
                        </a>

                        <div className="hidden md:flex md:order-1 flex-grow justify-center">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="search-navbar" className="block w-96 p-1 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..." />
                            </div>
                        </div>

                        <div className="flex md:order-2">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                            </div>
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-9 h-9 rounded-full -ml-2 md:ml-0" src={pro} alt="user photo" />
                            </button>
                        </div>
                    </div>

                    {/* <!-- Lower Navbar --> */}
                    <div className="bg-gray-100 dark:bg-zinc-800">
                        <div className="max-w-screen-xl flex items-center justify-center mx-auto p-2">
                            <a href="#" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Dashboard</a>
                            <a href="#" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Courses</a>
                            <a href="#" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Messages</a>
                            <a href="#" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blogs</a>
                        </div>
                    </div>
                </nav>


            </>


            {/* <div className='shadow-md w-full fixed top-0 left-0'>
                <nav className="border-gray-200 px-4 sm:px-6 lg:px-8 dark:bg-zinc-800">
                    <div className='flex items-center justify-between dark:bg-zinc-800 dark:text-white py-2'>
                        <a href="#" className="flex">
                            <h1 className="text-3xl font-bold" style={collegename}>JSPM RSCOE</h1>
                        </a>
                        <div className='relative md:static md:right-0 cursor-pointer w-12 h-12'>
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-12 h-12 rounded-full -ml-2 md:ml-0" src={pro} alt="user photo" />
                            </button>
                        </div>
                    </div>
                </nav>
            </div> */}
        </>

    )
}

export default HomeNav