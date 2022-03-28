import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLoKjdtJTl_4qjbX8nhiqG-1Hm0ZsCIW4",
  authDomain: "inventory-management-e743b.firebaseapp.com",
  projectId: "inventory-management-e743b",
  storageBucket: "inventory-management-e743b.appspot.com",
  messagingSenderId: "815604853628",
  appId: "1:815604853628:web:699efadb0f0589f66e92f9",
};

const app = initializeApp(firebaseConfig);

// Firebase Firestore
export const db = getFirestore(app);

// Firebase Authentication
export const auth = getAuth(app);

// Firebase Storage
export const storage = getStorage(app);
//   export default firebaseConfig;
