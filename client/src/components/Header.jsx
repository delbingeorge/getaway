import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import getaway from '../assets/logo/getaway.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

function Header() {
     const [show, setShow] = useState(false);
     return (
          <div className='px-4 py-2 flex items-center justify-between font-inter border-b-2 shadow-md'>
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
                    <div className='flex items-center justify-between'>
                         <button className='p-2 hover:bg-black rounded-full space-x-6'>
                              <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g clip-path="url(#clip0_214_534)">
                                        <path d="M23 11.5H18.92C18.8421 10.949 18.6981 10.4095 18.491 9.893L22.018 7.849C22.1359 7.78557 22.2398 7.69911 22.3237 7.59476C22.4075 7.49041 22.4695 7.37029 22.5061 7.24152C22.5427 7.11275 22.553 6.97794 22.5365 6.84511C22.52 6.71227 22.477 6.58409 22.41 6.46818C22.3431 6.35228 22.2535 6.25099 22.1467 6.17033C22.0398 6.08967 21.9179 6.03129 21.7881 5.99863C21.6583 5.96597 21.5232 5.95971 21.3909 5.98021C21.2587 6.00072 21.1318 6.04757 21.018 6.118L17.488 8.165C17.1505 7.73872 16.765 7.35283 16.339 7.015L18.385 3.484C18.5082 3.25505 18.5374 2.98712 18.4664 2.73701C18.3954 2.4869 18.2298 2.27428 18.0046 2.14422C17.7795 2.01417 17.5126 1.9769 17.2604 2.04033C17.0083 2.10376 16.7908 2.2629 16.654 2.484L14.607 6.009C14.0906 5.80172 13.551 5.65768 13 5.58V1.5C13 1.23478 12.8946 0.98043 12.7071 0.792893C12.5196 0.605357 12.2652 0.5 12 0.5C11.7348 0.5 11.4804 0.605357 11.2929 0.792893C11.1054 0.98043 11 1.23478 11 1.5V5.58C10.449 5.65768 9.90941 5.80172 9.393 6.009L7.349 2.482C7.21221 2.2609 6.99469 2.10176 6.74255 2.03833C6.49042 1.9749 6.22349 2.01217 5.99836 2.14222C5.77323 2.27228 5.60761 2.4849 5.5366 2.73501C5.4656 2.98512 5.49479 3.25305 5.618 3.482L7.664 7.015C7.23801 7.35283 6.85246 7.73872 6.515 8.165L2.985 6.118C2.87116 6.04757 2.74435 6.00072 2.61206 5.98021C2.47978 5.95971 2.34473 5.96597 2.21492 5.99863C2.0851 6.03129 1.96316 6.08967 1.85633 6.17033C1.7495 6.25099 1.65995 6.35228 1.59299 6.46818C1.52603 6.58409 1.48302 6.71227 1.46651 6.84511C1.45001 6.97794 1.46034 7.11275 1.4969 7.24152C1.53346 7.37029 1.5955 7.49041 1.67934 7.59476C1.76318 7.69911 1.86712 7.78557 1.985 7.849L5.509 9.893C5.30195 10.4095 5.15791 10.949 5.08 11.5H1C0.734784 11.5 0.48043 11.6054 0.292893 11.7929C0.105357 11.9804 0 12.2348 0 12.5C0 12.7652 0.105357 13.0196 0.292893 13.2071C0.48043 13.3946 0.734784 13.5 1 13.5H5.08C5.15791 14.051 5.30195 14.5905 5.509 15.107L1.982 17.151C1.86412 17.2144 1.76018 17.3009 1.67634 17.4052C1.5925 17.5096 1.53046 17.6297 1.4939 17.7585C1.45734 17.8873 1.44701 18.0221 1.46351 18.1549C1.48002 18.2877 1.52303 18.4159 1.58999 18.5318C1.65695 18.6477 1.7465 18.749 1.85333 18.8297C1.96016 18.9103 2.0821 18.9687 2.21192 19.0014C2.34173 19.034 2.47678 19.0403 2.60906 19.0198C2.74135 18.9993 2.86816 18.9524 2.982 18.882L6.512 16.835C6.84946 17.2613 7.23501 17.6472 7.661 17.985L5.618 21.516C5.49479 21.7449 5.4656 22.0129 5.5366 22.263C5.60761 22.5131 5.77323 22.7257 5.99836 22.8558C6.22349 22.9858 6.49042 23.0231 6.74255 22.9597C6.99469 22.8962 7.21221 22.7371 7.349 22.516L9.393 18.989C9.90947 19.1965 10.449 19.3412 11 19.42V23.5C11 23.7652 11.1054 24.0196 11.2929 24.2071C11.4804 24.3946 11.7348 24.5 12 24.5C12.2652 24.5 12.5196 24.3946 12.7071 24.2071C12.8946 24.0196 13 23.7652 13 23.5V19.42C13.5509 19.3419 14.0904 19.1978 14.607 18.991L16.651 22.518C16.7878 22.7391 17.0053 22.8982 17.2574 22.9617C17.5096 23.0251 17.7765 22.9878 18.0016 22.8578C18.2268 22.7277 18.3924 22.5151 18.4634 22.265C18.5344 22.0149 18.5052 21.7469 18.382 21.518L16.336 17.987C16.762 17.6492 17.1475 17.2633 17.485 16.837L21.015 18.884C21.1288 18.9544 21.2557 19.0013 21.3879 19.0218C21.5202 19.0423 21.6553 19.036 21.7851 19.0034C21.9149 18.9707 22.0368 18.9123 22.1437 18.8317C22.2505 18.751 22.34 18.6497 22.407 18.5338C22.474 18.4179 22.517 18.2897 22.5335 18.1569C22.55 18.0241 22.5397 17.8893 22.5031 17.7605C22.4665 17.6317 22.4045 17.5116 22.3207 17.4072C22.2368 17.3029 22.1329 17.2164 22.015 17.153L18.488 15.109C18.6962 14.592 18.8413 14.0518 18.92 13.5H23C23.2652 13.5 23.5196 13.3946 23.7071 13.2071C23.8946 13.0196 24 12.7652 24 12.5C24 12.2348 23.8946 11.9804 23.7071 11.7929C23.5196 11.6054 23.2652 11.5 23 11.5ZM12 17.5C5.392 17.29 5.394 7.709 12 7.5C18.608 7.71 18.606 17.291 12 17.5Z" fill="#C5C5C5" />
                                   </g>
                                   <defs>
                                        <clipPath id="clip0_214_534">
                                             <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                   </defs>
                              </svg>
                         </button>
                         <Link to='/sign-in' class="text-white bg-[#050708]  hover:bg-[#050708]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                              Sign Up
                         </Link>
                    </div>
               </div>
               <button className='lg:hidden block' onClick={() => { setShow(!show) }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="#1C274C" />
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="#1C274C" />
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="#1C274C" />
                    </svg>
               </button>
               <div className={`${show ? 'transition-transform -translate-x-0' : 'transition-transform translate-x-full'} fixed inset-0 duration-700 flex space-y-7 flex-col items-center justify-center bg-white`}>

                    <button className='lg:hidden block absolute top-8 right-8' onClick={() => { setShow(!show) }}>
                         <svg width="28" height="28" viewBox="0 0 24 24" className='hover:-rotate-90' fill="none" xmlns="http://www.w3.org/2000/svg">
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
