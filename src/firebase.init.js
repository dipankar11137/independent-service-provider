// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0cq7PcdSgWruQk2-mTAwy4CLDoGRzX6M",
    authDomain: "tutor-c4247.firebaseapp.com",
    projectId: "tutor-c4247",
    storageBucket: "tutor-c4247.appspot.com",
    messagingSenderId: "359449637860",
    appId: "1:359449637860:web:9304e2832b8f21d35c8df1",
    measurementId: "G-K8DFGGNTF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;