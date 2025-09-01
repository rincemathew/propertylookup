// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-color-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between border-b bg-color-primary">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-purple-600">Property Lookup</h1>
                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500" alt="Your Company" /> */}
              </div>
              {/* Links section */}
              <div className="hidden lg:ml-10 lg:block">
                <div className="flex space-x-4">
                  <Link to='/' className="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Home</Link>
                  <Link to='about' className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">About</Link>
                </div>
              </div>
            </div>

            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              {/* Search section */}
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative text-gray-400 focus-within:text-gray-500">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input id="search" className="block w-full rounded-md border border-gray-300 bg-color-tertiary py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:text-sm" placeholder="Search" type="search" name="search" />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              {/* Mobile menu button */}
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-color-tertiary p-2 text-white-400 hover:bg-color-quaternary hover:text-white-500 focus:outline-none focus:ring-2 focus:ring-purple-500" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>

            {/* Actions section */}
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center">
                {/* <button type="button" className="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button> */}

                {/* Profile dropdown */}
                {currentUser ? (
                  <div className="relative ml-3">
                  <button type="button" className="flex rounded-full bg-color-tertiary text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={currentUser.avatar || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"} alt={currentUser.username} />
                  </button>

                  {profileMenuOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="block px-4 py-2 text-sm text-gray-700">{currentUser.username}</div>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
                      <Link to='#' className="block py-2 px-4 text-sm text-gray-700">Sign out</Link>
                    </div>
                  )}
                </div>
                  ):(
                    <div className="relative ml-3">
                  <button type="button" className="flex rounded-full bg-color-tertiary text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="" />
                  </button>

                  {profileMenuOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-color-tertiary py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link to="/sign-in" className="block px-4 py-2 text-sm text-gray-700">Sign In</Link>
                    </div>
                  )}
                </div>
                  )}
                
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-b bg-color-primary lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link to='/' className="hover:bg-color-tertiary block px-3 py-2 rounded-md font-medium text-gray-900">Home</Link>
              <Link to='about' className="hover:bg-color-tertiary block px-3 py-2 rounded-md font-medium text-gray-900">About</Link>
            </div>
            <div className="border-t bg-color-primary pt-4 pb-3">
              <div className="flex items-center px-5">
                <img className="h-10 w-10 rounded-full bg-color-tertiary" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="" />
                <div className="ml-3">
                  {currentUser ?(
                    <div>
                   <div className="text-base font-medium text-gray-800">{currentUser.username}</div>
                  <div className="text-sm font-medium text-gray-500">{currentUser.email}</div>
                  </div>
                  ):(<div></div>)}
                  
                </div>
                {/* <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button> */}
              </div>
              <div className="mt-3 space-y-1 px-2">
                {currentUser ? (
                  <div>
                  <Link to='profile' className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-color-tertiary">Your Profile</Link>
                  <Link to='#' className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-color-tertiary">Sign out</Link>
                  </div>
                ):(
                <Link to='sign-in' className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-color-tertiary">Sign In</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
