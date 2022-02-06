import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBvt3713wdsUCc6CDga0afI9EMY7Po0v4",
  authDomain: "jyloan-8f457.firebaseapp.com",
  projectId: "jyloan-8f457",
  storageBucket: "jyloan-8f457.appspot.com",
  messagingSenderId: "326804988703",
  appId: "1:326804988703:web:ad02eca5aa2bf26403062a",
  measurementId: "G-32GFD09ZHV"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig)
// Cloud Firestore 인스턴스를 초기화
var db = getFirestore()

export { app, db }
