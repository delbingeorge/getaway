// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "getawayblog.firebaseapp.com",
    projectId: "getawayblog",
    storageBucket: "getawayblog.appspot.com",
    messagingSenderId: "615424967606",
    appId: "1:615424967606:web:513abb3a4b049634c0b717",
    measurementId: "G-KDLB5STER1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
