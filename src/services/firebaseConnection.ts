import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVr9YZsrrhDn-xWj1n1S7nXjOHJUwWKgI",
  authDomain: "tarefasplus-9085a.firebaseapp.com",
  projectId: "tarefasplus-9085a",
  storageBucket: "tarefasplus-9085a.appspot.com",
  messagingSenderId: "552773092452",
  appId: "1:552773092452:web:1564bc71452d539bb90b71",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
