import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCMG2bEAX_kwZjbsJfNraF-ubKzrnZzzBM",
  authDomain: "farmscape-dev.firebaseapp.com",
  projectId: "farmscape-dev",
  storageBucket: "farmscape-dev.appspot.com",
  messagingSenderId: "5550317970",
  appId: "1:5550317970:web:b7ebf172ade2046cc6214b"
}

export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);