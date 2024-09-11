// import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500" alt="Your Company" />
              </div>
              {/* Links section */}
              <div className="hidden lg:ml-10 lg:block">
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Dashboard</a>
                  <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Jobs</a>
                  <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Applicants</a>
                  <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900">Company</a>
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
                  <input id="search" className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:text-sm" placeholder="Search" type="search" name="search" />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              {/* Mobile menu button */}
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" onClick={() => setMenuOpen(!menuOpen)}>
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
                <button type="button" className="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <button type="button" className="flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>

                  {profileMenuOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700">Your Profile</a>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700">Settings</a>
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700">Sign out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-b border-gray-200 bg-gray-50 lg:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="#" className="bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Dashboard</a>
              <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Jobs</a>
              <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Applicants</a>
              <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900">Company</a>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-5">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Sign out</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
