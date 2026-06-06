
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtual-ai-64df2.firebaseapp.com",
  projectId: "virtual-ai-64df2",
  storageBucket: "virtual-ai-64df2.firebasestorage.app",
  messagingSenderId: "114222304892",
  appId: "1:114222304892:web:0a320b57f1c3937181c3f9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}