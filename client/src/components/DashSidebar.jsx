import React from 'react'
import { Link } from 'react-router-dom'

function DashSidebar() {
     return (
          <div className="bg-white h-screen w-48 flex flex-col justify-center items-center shadow-md">
               <Link to='/dashboard/?tab=profile' className="text-gray-800 text-lg mb-4 hover:text-gray-600">Profile</Link>
               <a href="#" className="text-gray-800 text-lg hover:text-gray-600">Sign Out</a>
          </div>
     )
}

export default DashSidebar
