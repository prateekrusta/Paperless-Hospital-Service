import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDAcMhoip08KKN71qlumHtaBr5PdSFKgDs",
  authDomain: "hmsportal-a4d86.firebaseapp.com",
  projectId: "hmsportal-a4d86",
  storageBucket: "hmsportal-a4d86.appspot.com",
  messagingSenderId: "181951849726",
  appId: "1:181951849726:web:5367adcb5663cde70931af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {firestore, auth}