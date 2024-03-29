import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import getaway from '../assets/logo/getaway.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

function Header() {
     return (
          <div className='px-4 flex items-center justify-between font-inter'>
               <Link to='/'>
                    <img className='h-16' src={getaway} alt="Getaway Logo" />
               </Link>
               <form>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='search' />
               </form>
               <div>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
               </div>
               <div>
                    <button>
                         <FontAwesomeIcon icon={faSun} />
                    </button>
                    <Link to='/sign-in' className=''>
                         Sign in
                    </Link>
               </div>
          </div>
     )
}

export default Header
