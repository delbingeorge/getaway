import React, { useState } from 'react'
import getawayText from '../assets/logo/getawayText.png'
import getawaySpin from '../assets/logo/getawaySpin.png'
import bgImage from '../assets/images/bgcoral.png'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import OAuth from '../components/OAuth'

function SignIn() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, error: errorMessage } = useSelector(state => state.user)

  const handleSwipe = () => {
    console.log("done")
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }

  const formOnSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields! "))
    }
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message))
      }
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className="flex lg:flex-row flex-col font-poppins">
      <div className="w-full lg:w-2/4 min-h-screen relative hidden lg:flex items-end justify-start overflow-hidden">
        <div>
          <div className="left-0 top-0 h-full w-full bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute z-10">
            <div className='space-x-3 flex flex-row  absolute bottom-5 right-10'>
              <div onClick={() => { handleSwipe }} className='cursor-pointer duration-200 hover:scale-90'>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
                  <path d="M16 12H8M8 12L11 9M8 12L11 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div onClick={() => { console.log("done") }} className='cursor-pointer duration-200 hover:scale-90'>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
                  <path d="M8 12C12.6863 12 11.3137 12 16 12M16 12L13 9M16 12L13 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <img id="zoomImage" src={bgImage} className="w-full top-0 left-0 h-full object-cover absolute -z-20" alt="" />
        </div>
      </div>
      <div className="min-h-screen flex-col w-full lg:w-2/4 flex items-center justify-center">
        <form id="login-screen" onSubmit={formOnSubmit} className="flex items-center flex-col w-[95%] lg:w-full justify-center space-y-6"
          method="post">
          <div className="flex flex-row items-center justify-center mt-1">
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
            <input type="text" id="username" onChange={handleChange} className="text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0"
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
            <div className='relative'>
              <input type={show == true ? 'text' : 'password'} id="password" onChange={handleChange} className="w-full text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0"
                placeholder="*****************" />
              <div onClick={() => { setShow(!show) }} className='absolute right-0 top-4'>
                {show == false ?
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.68936 6.70456C2.52619 6.32384 2.08528 6.14747 1.70456 6.31064C1.32384 6.47381 1.14747 6.91472 1.31064 7.29544L2.68936 6.70456ZM15.5872 13.3287L15.3125 12.6308L15.5872 13.3287ZM9.04145 13.7377C9.26736 13.3906 9.16904 12.926 8.82185 12.7001C8.47466 12.4742 8.01008 12.5725 7.78417 12.9197L9.04145 13.7377ZM6.37136 15.091C6.14545 15.4381 6.24377 15.9027 6.59096 16.1286C6.93815 16.3545 7.40273 16.2562 7.62864 15.909L6.37136 15.091ZM22.6894 7.29544C22.8525 6.91472 22.6762 6.47381 22.2954 6.31064C21.9147 6.14747 21.4738 6.32384 21.3106 6.70456L22.6894 7.29544ZM19 11.1288L18.4867 10.582V10.582L19 11.1288ZM19.9697 13.1592C20.2626 13.4521 20.7374 13.4521 21.0303 13.1592C21.3232 12.8663 21.3232 12.3914 21.0303 12.0985L19.9697 13.1592ZM11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5H11.25ZM16.3714 15.909C16.5973 16.2562 17.0619 16.3545 17.409 16.1286C17.7562 15.9027 17.8545 15.4381 17.6286 15.091L16.3714 15.909ZM5.53033 11.6592C5.82322 11.3663 5.82322 10.8914 5.53033 10.5985C5.23744 10.3056 4.76256 10.3056 4.46967 10.5985L5.53033 11.6592ZM2.96967 12.0985C2.67678 12.3914 2.67678 12.8663 2.96967 13.1592C3.26256 13.4521 3.73744 13.4521 4.03033 13.1592L2.96967 12.0985ZM12 13.25C8.77611 13.25 6.46133 11.6446 4.9246 9.98966C4.15645 9.16243 3.59325 8.33284 3.22259 7.71014C3.03769 7.3995 2.90187 7.14232 2.8134 6.96537C2.76919 6.87696 2.73689 6.80875 2.71627 6.76411C2.70597 6.7418 2.69859 6.7254 2.69411 6.71533C2.69187 6.7103 2.69036 6.70684 2.68957 6.70503C2.68917 6.70413 2.68896 6.70363 2.68892 6.70355C2.68891 6.70351 2.68893 6.70357 2.68901 6.70374C2.68904 6.70382 2.68913 6.70403 2.68915 6.70407C2.68925 6.7043 2.68936 6.70456 2 7C1.31064 7.29544 1.31077 7.29575 1.31092 7.29609C1.31098 7.29624 1.31114 7.2966 1.31127 7.2969C1.31152 7.29749 1.31183 7.2982 1.31218 7.299C1.31287 7.30062 1.31376 7.30266 1.31483 7.30512C1.31698 7.31003 1.31988 7.31662 1.32353 7.32483C1.33083 7.34125 1.34115 7.36415 1.35453 7.39311C1.38127 7.45102 1.42026 7.5332 1.47176 7.63619C1.57469 7.84206 1.72794 8.13175 1.93366 8.47736C2.34425 9.16716 2.96855 10.0876 3.8254 11.0103C5.53867 12.8554 8.22389 14.75 12 14.75V13.25ZM15.3125 12.6308C14.3421 13.0128 13.2417 13.25 12 13.25V14.75C13.4382 14.75 14.7246 14.4742 15.8619 14.0266L15.3125 12.6308ZM7.78417 12.9197L6.37136 15.091L7.62864 15.909L9.04145 13.7377L7.78417 12.9197ZM22 7C21.3106 6.70456 21.3107 6.70441 21.3108 6.70427C21.3108 6.70423 21.3108 6.7041 21.3109 6.70402C21.3109 6.70388 21.311 6.70376 21.311 6.70368C21.3111 6.70352 21.3111 6.70349 21.3111 6.7036C21.311 6.7038 21.3107 6.70452 21.3101 6.70576C21.309 6.70823 21.307 6.71275 21.3041 6.71924C21.2983 6.73223 21.2889 6.75309 21.2758 6.78125C21.2495 6.83757 21.2086 6.92295 21.1526 7.03267C21.0406 7.25227 20.869 7.56831 20.6354 7.9432C20.1669 8.69516 19.4563 9.67197 18.4867 10.582L19.5133 11.6757C20.6023 10.6535 21.3917 9.56587 21.9085 8.73646C22.1676 8.32068 22.36 7.9668 22.4889 7.71415C22.5533 7.58775 22.602 7.48643 22.6353 7.41507C22.6519 7.37939 22.6647 7.35118 22.6737 7.33104C22.6782 7.32097 22.6818 7.31292 22.6844 7.30696C22.6857 7.30398 22.6867 7.30153 22.6876 7.2996C22.688 7.29864 22.6883 7.29781 22.6886 7.29712C22.6888 7.29677 22.6889 7.29646 22.689 7.29618C22.6891 7.29604 22.6892 7.29585 22.6892 7.29578C22.6893 7.29561 22.6894 7.29544 22 7ZM18.4867 10.582C17.6277 11.3882 16.5739 12.1343 15.3125 12.6308L15.8619 14.0266C17.3355 13.4466 18.5466 12.583 19.5133 11.6757L18.4867 10.582ZM18.4697 11.6592L19.9697 13.1592L21.0303 12.0985L19.5303 10.5985L18.4697 11.6592ZM11.25 14V16.5H12.75V14H11.25ZM14.9586 13.7377L16.3714 15.909L17.6286 15.091L16.2158 12.9197L14.9586 13.7377ZM4.46967 10.5985L2.96967 12.0985L4.03033 13.1592L5.53033 11.6592L4.46967 10.5985Z" fill="black" />
                  </svg> :
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="black" strokeWidth="1.5" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="black" strokeWidth="1.5" />
                  </svg>
                }
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col w-[85%] lg:w-3/4">
                              <label for="password" className="text-[1rem] text-dark/70  flex items-center space-x-1 animate-shakes">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                             strokeWidth="1.5"
                                             d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25" />
                                   </svg>
                                   <span>
                                        Re-type password
                                   </span>
                              </label>
                              <input type="password" id="re-password" onChange={handleChange} className="text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0" 
                                   placeholder="*****************" />
                         </div> */}
          {errorMessage && (
            <div className='flex items-center justify-center space-x-2'>
              <svg viewBox="0 0 24 24" fill="none" className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM11.25 13.5V8.25H12.75V13.5H11.25ZM11.25 15.75V14.25H12.75V15.75H11.25Z" fill="#ff0000"></path> </g></svg>
              <span className='text-red-500 font-medium'>{errorMessage}</span>
            </div>
          )}
          <button type="submit" disabled={loading} className="text-[1.35rem] bg-primary flex items-center justify-center w-[85%] lg:w-3/4 text-light py-4 px-24 hover:bg-primary/90 cursor-pointer duration-300 font-medium">
            {loading ?
              <svg className='w-6 h-6 animate-spin' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g fill="#fff" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
                </g>
                </g>
              </svg>
              : 'Login'}
          </button>
        </form>
        <h1 className='font-inter my-4 font-semibold'>OR</h1>
        <OAuth />
        <Link className='font-semibold mt-4' to='/sign-up'>Not a reader?
          <span className='underline pl-2'>
            create an account
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
