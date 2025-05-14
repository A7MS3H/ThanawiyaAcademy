
// firebase-config.js

// استيراد Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// تهيئة Firebase باستخدام بياناتك الخاصة
const firebaseConfig = {
  apiKey: "AIzaSyAcJWsvImyzZRWxL0KiH0vvio27XT1Crxk",
  authDomain: "a7msah.firebaseapp.com",
  projectId: "a7msah",
  storageBucket: "a7msah.firebasestorage.app",
  messagingSenderId: "1023230008677",
  appId: "1:1023230008677:web:1e412cfb69df986569958c",
  measurementId: "G-M0BB2JLYX3"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // تفعيل ميزة التوثيق
