import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

function OAuth() {

     const auth = getAuth(app)
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const handleGoogleClick = async () => {
          const provider = new GoogleAuthProvider()
          provider.setCustomParameters({ prompt: 'select_account' })
          try {
               const resultFromGoogle = await signInWithPopup(auth, provider)
               const res = await fetch('/api/auth/google', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                         name: resultFromGoogle.user.displayName,
                         email: resultFromGoogle.user.email,
                         googlePhotoUrl: resultFromGoogle.user.photoURL,
                    }),
               })
               const data = await res.json();
               if (res.ok) {
                    dispatch(signInSuccess(data))
                    navigate('/')
               }
          } catch (error) {
               console.log(error);
          }
     }

     return (
          <button type='button' onClick={handleGoogleClick} className="space-x-3 flex items-center justify-center text-[1.35rem] bg-white border-[3px] border-black w-[85%] lg:w-3/4 text-light py-3 px-8 lg:px-24 hover:bg-primary/20 cursor-pointer duration-300 font-medium">
               <svg className='w-6 h-6' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_17_40)">
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
               <h1 className='text-black text-xl  font-medium'>Sign up with Google</h1>
          </button>
     )
}

export default OAuth
