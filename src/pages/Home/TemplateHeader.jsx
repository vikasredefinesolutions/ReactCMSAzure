/*Component Name: TemplateHeader
Component Functional Details: User can create or update TemplateHeader master details from here.
Created By: Vikas Patel
Created Date: 07/06/2022
Modified By: <Modified By Name>
Modified Date: <Modified Date> */

import React from 'react';

const TemplateHeader = () => {
    return (
        <>
            <header className="flex justify-center items-center w-full sticky inset-0 bottom-auto z-60 group">
                                <div className="w-full relative">
                                <div className="text-xl text-white w-full">
                                      <nav className="bg-white shadow border border-neutral-200" x-data="{ open: false }">
                                        <div className="mx-auto px-2 sm:px-6 lg:px-8">
                                          <div className="relative flex justify-between h-16">
                                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                                                <span className="sr-only">Open main menu</span>
                                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                                </svg>
                                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                              </button>
                                            </div>
                                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                              <div className="flex-shrink-0 flex items-center">
                                                <img className="block lg:hidden h-8 w-auto" src="http://ystore.us/HTML/RedefineCommerce/Admin/images/demo-logo-black.png" alt="Logo" />
                                                <img className="hidden lg:block h-8 w-auto" src="http://ystore.us/HTML/RedefineCommerce/Admin/images/demo-logo-black.png" alt="Logo" />
                                              </div>
                                              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                  Dashboard </a>
                                                <a href="#" className="border-transparent text-gray-500 hover:border-neutral-400 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                  Team </a>
                                                <a href="#" className="border-transparent text-gray-500 hover:border-neutral-400 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                  Projects </a>
                                                <a href="#" className="border-transparent text-gray-500 hover:border-neutral-400 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                  Contact </a>
                                              </div>
                                            </div>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                              <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">View notifications</span>
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                                </svg>
                                              </button>
                                              <div className="ml-3 relative">
                                                <div>
                                                  <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src="http://ystore.us/HTML/RedefineCommerce/Admin/images/user-avatar-32.png" alt="" />
                                                  </button>
                                                </div>

                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="sm:hidden" id="mobile-menu" x-show="open" style={{ display: 'none;'}}>
                                          <div className="pt-2 pb-4 space-y-1">
                                            <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>
                                            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-neutral-400 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>
                                            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-neutral-400 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>
                                            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-neutral-400 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</a>
                                          </div>
                                        </div>
                                      </nav>
                                    </div>
                                </div>

                              </header>
        </>
    );
};

export default TemplateHeader;
