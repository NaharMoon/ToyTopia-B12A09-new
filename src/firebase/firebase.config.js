import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVhJQ2x1XjAxy9kof335nfHEhEhpBIGr8",
  authDomain: "toytopia-b12a09-ea1f3.firebaseapp.com",
  projectId: "toytopia-b12a09-ea1f3",
  storageBucket: "toytopia-b12a09-ea1f3.firebasestorage.app",
  messagingSenderId: "130548151410",
  appId: "1:130548151410:web:83338fd44a086503c6beeb"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);