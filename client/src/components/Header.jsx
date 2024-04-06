import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import getaway from '../assets/logo/getaway.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function Header() {
     const [show, setShow] = useState(false);
     const navigate = useLocation();
     const { currentUser } = useSelector(state => state.user)

     let pathname = navigate.pathname;
     return (
          <div className={`${pathname == '/sign-up' || pathname == '/sign-in' ? 'hidden' : 'px-4 py-2 flex items-center justify-between font-inter border-b-2 shadow-md'}`}>
               <Link to='/' className='lg:w-[20%] w-full'>
                    <img className='h-12 lg:h-14' src={getaway} alt="Getaway Logo" />
               </Link>
               <div className='lg:w-[80%] w-full hidden lg:flex items-center justify-between'>
                    <form className='py-2 px-3 space-x-3 border-black/50 border-[2px] rounded-full'>
                         <FontAwesomeIcon icon={faSearch} />
                         <input className='border-none outline-none' type='text' placeholder='search' />
                    </form>
                    <div className='w-[20%] flex items-center justify-between'>
                         <Link to='/'>Home</Link>
                         <Link to='/about'>About</Link>
                         <Link to='/projects'>Projects</Link>
                    </div>
                    {currentUser ? (
                         <img class='w-10 h-10 border-black rounded-full object-cover' src={currentUser.profilePicture} />
                    ) :
                         <div className='flex items-center justify-between'>
                              <Link to='/sign-up' class="text-white bg-[#050708]  hover:bg-[#050708]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                   Sign Up
                              </Link>
                         </div>}
               </div>
               <button className='lg:hidden block' onClick={() => { setShow(!show) }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="#1C274C" />
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="#1C274C" />
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="#1C274C" />
                    </svg>
               </button>
               <div className={`${show ? 'transition-transform -translate-x-0' : 'transition-transform translate-x-full'} fixed inset-0 duration-700 flex space-y-7 flex-col items-center justify-center bg-white`}>

                    <button className='lg:hidden block absolute top-5 right-5' onClick={() => { setShow(!show) }}>
                         <svg width="28" height="28" viewBox="0 0 24 24" className='hover:rotate-90' fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z" fill="black" />
                         </svg>
                    </button>

                    <div className='flex'>
                         <input className='border-none outline-none bg-transparent placeholder:text-black placeholder:text-xl text-center' type='text' placeholder='Search' />
                    </div>
                    <Link to='/' onClick={() => { setShow(false) }} className='flex items-center justify-between space-x-3'>
                         <h1 className='text-xl'>Home</h1>
                    </Link>
                    <Link to='/about' onClick={() => { setShow(false) }} className='flex items-center justify-between space-x-3'>
                         <h1 className='text-xl'>About</h1>
                    </Link>
                    <Link to='/projects' onClick={() => { setShow(false) }} className='flex items-center justify-between space-x-3'>
                         <h1 className='text-xl'>Project</h1>
                    </Link>
               </div>
          </div>
     )
}

export default Header
