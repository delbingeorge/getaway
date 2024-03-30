import React from 'react'
import getawayText from '../assets/logo/getawayText.png'
import getawaySpin from '../assets/logo/getawaySpin.png'
import bgImage from '../assets/images/bgcoral.png'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="w-full lg:w-2/4 min-h-screen relative flex items-end justify-start overflow-hidden">
        <div>
          <div className="left-0 top-0 h-full w-full bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute -z-10">
          </div>
          <img id="zoomImage" src={bgImage} className="w-full top-0 left-0 h-full object-cover absolute -z-20" alt="" />
        </div>
      </div>
      <div className="min-h-screen flex-col w-full lg:w-2/4 flex items-center justify-center">
        <form id="login-screen" className="flex items-center flex-col w-[95%] lg:w-full justify-center space-y-6"
          method="post">
          <div className="flex flex-row items-center justify-center">
            <img src={getawaySpin} id="zoomLogo" className="w-20 animate-spinner" alt="" />
            <img src={getawayText} id="zoomLogo" className="w-44" alt="" />
          </div>
          <div className="flex flex-col w-[85%] lg:w-3/4">
            <label for="password" className="text-[1rem] text-dark/70  flex items-center space-x-1 animate-shakes">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="6" r="4" />
                  <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
                </g>
              </svg>
              <span>
                Username
              </span>
            </label>
            <input type="email" name="email" className="text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0" required
              placeholder="getaway_user" />
          </div>
          <div className="flex flex-col w-[85%] lg:w-3/4">
            <label for="password" className="text-[1rem] text-dark/70  flex items-center space-x-1 animate-shakes">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25" />
              </svg>
              <span>
                Password
              </span>
            </label>
            <input type="password" name="password" className="text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0" required
              placeholder="*****************" />
          </div>
          <input type="submit"
            className="text-[1.35rem] bg-primary w-[85%] lg:w-3/4 text-light py-4 px-24 rounded-lg hover:bg-primary/90 cursor-pointer duration-300 font-medium"
            value="Login" />
        </form>
        <h1 className='my-3 font-inter font-semibold'>OR</h1>
        <button className="space-x-3 flex items-center justify-center text-[1.35rem] bg-white border-[3px] border-black w-[85%] lg:w-3/4 text-light py-3 px-24 rounded-lg hover:bg-primary/20 cursor-pointer duration-300 font-medium">
          <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_40)">
              <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
              <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
              <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
              <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className='text-black'>Sign in with Google</h1>
        </button>
        <Link to='/sign-up'>Create an account instead!</Link>
      </div>
    </div>
  )
}

export default SignIn
