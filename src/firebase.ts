
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBtzfyk2AliPkSXY_KtHWdV1CykwK6kLlw",
  authDomain: "bluechat-19f94.firebaseapp.com",
  projectId: "bluechat-19f94",
  storageBucket: "bluechat-19f94.appspot.com",
  messagingSenderId: "251675592326",
  appId: "1:251675592326:web:e4c74700c569c9dd39b307",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();