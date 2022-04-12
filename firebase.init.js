import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZldIq-A3_BtDi1njg8RFyfzYkpnhkF0M",
  authDomain: "route-firebase-integrati-15d60.firebaseapp.com",
  projectId: "route-firebase-integrati-15d60",
  storageBucket: "route-firebase-integrati-15d60.appspot.com",
  messagingSenderId: "740583625703",
  appId: "1:740583625703:web:78c576879603d6ff6ee342",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
export default auth;
