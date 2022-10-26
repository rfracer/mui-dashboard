import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'mui-dashboard-1bae7.firebaseapp.com',
  projectId: 'mui-dashboard-1bae7',
  storageBucket: 'mui-dashboard-1bae7.appspot.com',
  messagingSenderId: '969860480341',
  appId: '1:969860480341:web:430faccea2cfbc4e0f03dc',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
