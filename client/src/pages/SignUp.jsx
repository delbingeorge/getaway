import React from 'react'
import getawayText from '../assets/logo/getawayText.png'
import getawaySpin from '../assets/logo/getawaySpin.png'
import bgImage from '../assets/images/bgcoral.png'
import { useLocation } from 'react-router-dom'

function SignUp() {

     return (
          <div className="flex lg:flex-row flex-col">
               <div className="w-full lg:w-2/4 min-h-screen relative flex items-end justify-start overflow-hidden">
                    <div>
                         <div className="left-0 top-0 h-full w-full bg-gradient-to-t from-black/40 via-black/10 to-transparent absolute -z-10">
                              {/* <h1>Join our community</h1> */}
                         </div>
                         <img id="zoomImage" src={bgImage} className="w-full top-0 left-0 h-full object-cover absolute -z-20" alt="" />
                    </div>
                    <div className="pb-6 text-light px-6 lg:px-12">
                         {/* <img src={getaway} id="zoomLogo" className="w-40 h-full invert brightness-0 opacity-75" alt="" /> */}
                         {/* <div className="-space-y-1 mb-3">
                              <h2 className="font-medium text-xl">Readme getaway</h2>
                              <h1 className="font-medium text-4xl">Get away quickly</h1>
                         </div>
                         <p className=" mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, suscipit sequi ab maiores voluptatum et ratione mollitia hic quos. Officiis illo quia quidem, saepe cum vitae accusamus sequi fugiat laudantium.</p>
                         <div className="">
                              <a href="#login-screen" className="font-mono lg:hidden flex items-center space-x-2">
                                   <span>Login to your account
                                   </span>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                             d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                   </svg>
                              </a>
                         </div> */}
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
                                        <g fill="none" stroke="currentColor" stroke-width="1.5">
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
                                   <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m10.0979 2.43735c1.8913-.37621 3.8517-.18313 5.6333.55483 1.7815.73795 3.3043 1.98764 4.3756 3.59101 1.0714 1.60338 1.6432 3.48841 1.6432 5.41681v1.5c0 .862-.3424 1.6886-.9519 2.2981s-1.4361.9519-2.2981.9519c-.8619 0-1.6886-.3424-2.2981-.9519-.2236-.2236-.4113-.4764-.5593-.7495-.0896.1071-.1843.2106-.2838.3102-.8908.8908-2.099 1.3912-3.3588 1.3912s-2.46795-.5004-3.35875-1.3912-1.39125-2.099-1.39125-3.3588.50045-2.46795 1.39125-3.35875 2.09895-1.39125 3.35875-1.39125 2.468.50045 3.3588 1.39125 1.3912 2.09895 1.3912 3.35875v1.5c0 .4641.1844.9093.5126 1.2374.3282.3282.7733.5126 1.2374.5126s.9093-.1844 1.2374-.5126c.3282-.3281.5126-.7733.5126-1.2374v-1.5c0-1.6317-.4839-3.22674-1.3904-4.58345s-2.195-2.41413-3.7025-3.03855c-1.5074-.62442-3.1662-.7878-4.7666-.46947-1.60033.31832-3.07034 1.10406-4.22413 2.25784-1.15378 1.15379-1.93952 2.6238-2.25784 4.22413-.31833 1.6004-.15495 3.2592.46947 4.7666.62442 1.5075 1.68184 2.796 3.03855 3.7025s2.95175 1.3904 4.58345 1.3904h.0007c1.4483.0014 2.8708-.3793 4.1233-1.105.3584-.2076.8173-.0854 1.025.273.2076.3584.0854.8173-.273 1.025-1.4821.8586-3.1646 1.3087-4.8767 1.307l.0007-.75v.75c-.0002 0-.0005 0-.0007 0-1.9281-.0001-3.81293-.572-5.41611-1.6432-1.60337-1.0713-2.85306-2.5941-3.59101-4.3756-.73796-1.7816-.93104-3.742-.55483-5.6333.3762-1.89134 1.3048-3.62863 2.66836-4.99219s3.10085-2.29216 4.99219-2.66836zm5.1521 9.56265c0-.8619-.3424-1.6886-.9519-2.29809-.6095-.6095-1.4361-.95191-2.2981-.95191-.8619 0-1.6886.34241-2.29809.95191-.6095.60949-.95191 1.43619-.95191 2.29809 0 .862.34241 1.6886.95191 2.2981.60949.6095 1.43619.9519 2.29809.9519.862 0 1.6886-.3424 2.2981-.9519s.9519-1.4361.9519-2.2981z" fill="#585a60" fill-rule="evenodd"></path></g></svg>
                                   <span>
                                        Email Address
                                   </span>
                              </label>
                              <input type="email" name="email" className="text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0" required
                                   placeholder="example@email.com" />
                         </div>
                         <div className="flex flex-col w-[85%] lg:w-3/4">
                              <label for="password" className="text-[1rem] text-dark/70  flex items-center space-x-1 animate-shakes">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                             stroke-width="1.5"
                                             d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25" />
                                   </svg>
                                   <span>
                                        Password
                                   </span>
                              </label>
                              <input type="password" name="password" className="text-[1.3rem] placeholder:text-dark/70 text-dark border-b-[3px] border-b-primary outline-none pb-1 pt-3 focus:placeholder:opacity-0" required
                                   placeholder="*****************" />
                         </div>
                         <div className="flex flex-col w-[85%] lg:w-3/4">
                              <label for="password" className="text-[1rem] text-dark/70  flex items-center space-x-1 animate-shakes">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                             stroke-width="1.5"
                                             d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25" />
                                   </svg>
                                   <span>
                                        Re-type password
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

                         <h1 className='text-black'>Sign up using Google</h1>
                    </button>
               </div>
          </div >
     )
}

export default SignUp
