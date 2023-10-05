import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCwPp-dNSxHVl5xQlgncMpSdmH_-_WJrXs",
  authDomain: "steam-spider-396907.firebaseapp.com",
  projectId: "steam-spider-396907",
  storageBucket: "steam-spider-396907.appspot.com",
  messagingSenderId: "798598304972",
  appId: "1:798598304972:web:b82d0b6e3f5558460f9e69",
  measurementId: "G-3TSPQL4JTG"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
