import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcFWt6DR5h0NnLBtgSN5_0LSRrXkZSrdo",
  authDomain: "netflix-clone-1fbad.firebaseapp.com",
  projectId: "netflix-clone-1fbad",
  storageBucket: "netflix-clone-1fbad.firebasestorage.app",
  messagingSenderId: "346443231093",
  appId: "1:346443231093:web:85ee95c2b7804a8c09ad3c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);