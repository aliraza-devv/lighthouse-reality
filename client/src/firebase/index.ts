import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPMs6wHlChBtEmwe-GCwxGKdPzBfuG5Dg",
  authDomain: "lighthouse-reality-files.firebaseapp.com",
  projectId: "lighthouse-reality-files",
  storageBucket: "lighthouse-reality-files.appspot.com",
  messagingSenderId: "384325414155",
  appId: "1:384325414155:web:13bc119bb10f444fe1060e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);