// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT15nahvLzEyK8SUp3BzTyHiVb_8Cr_5E",
    authDomain: "dragon-news-d5fe8.firebaseapp.com",
    projectId: "dragon-news-d5fe8",
    storageBucket: "dragon-news-d5fe8.appspot.com",
    messagingSenderId: "131797262109",
    appId: "1:131797262109:web:8be882a05ecd19060a0bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;