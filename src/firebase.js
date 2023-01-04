import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUAphkM8h6sD1lI5L5IvpmHsy-Ox87skU",
  authDomain: "chat-apps-e3b8f.firebaseapp.com",
  projectId: "chat-apps-e3b8f",
  storageBucket: "chat-apps-e3b8f.appspot.com",
  messagingSenderId: "993798418963",
  appId: "1:993798418963:web:b44a289e6ac79fafedc5e6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
