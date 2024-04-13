import React from 'react'
import { useSelector } from 'react-redux'

function DashProfile() {
     const { currentUser } = useSelector(state => state.user);
     console.log(currentUser)
     return (
          <div className="w-2/5 ">
               <img src={currentUser.profilePicture} alt="" className="rounded-full mx-auto mb-4" />

               <input type='text' id='username' placeholder='Username' defaultValue={currentUser.username} className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
               <input type='text' id='email' placeholder='Email' defaultValue={currentUser.email} className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
               <input type='password' id='password' placeholder='Password' className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />

               <button className="block w-full px-4 py-2 mb-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>

               <button className="block w-full px-4 py-2 mb-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete Account</button>
               <button className="block w-full px-4 py-2 mb-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Out</button>
          </div>
     )
}

export default DashProfile
