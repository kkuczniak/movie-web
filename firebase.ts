// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCV0rYN3J4hnfpDIYomMo17nTCsqIhnw2s',
  authDomain: 'moviedatas-6c185.firebaseapp.com',
  projectId: 'moviedatas-6c185',
  storageBucket: 'moviedatas-6c185.appspot.com',
  messagingSenderId: '247476236987',
  appId: '1:247476236987:web:03645d5985e7e184bb2f9e',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
