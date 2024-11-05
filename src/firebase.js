// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Yu2xAH5AaWMu6ldtr2SEDzuKiS1AKU4",
  authDomain: "netflix-clone-33c5b.firebaseapp.com",
  projectId: "netflix-clone-33c5b",
  storageBucket: "netflix-clone-33c5b.firebasestorage.app",
  messagingSenderId: "877242294125",
  appId: "1:877242294125:web:2662197ad56f6a591fc464"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
