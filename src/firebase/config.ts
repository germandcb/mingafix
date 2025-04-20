// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx5F0QQHS2vuis3EOpPFbqx-lmJoW7_bA",
    authDomain: "mingafix-ff707.firebaseapp.com",
    projectId: "mingafix-ff707",
    storageBucket: "mingafix-ff707.firebasestorage.app",
    messagingSenderId: "969854103666",
    appId: "1:969854103666:web:fb6156bb3fc1656e8fd2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "es"; 

export const firebase = {
    app,
    auth,
};
