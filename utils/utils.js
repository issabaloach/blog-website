
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

  import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    addDoc,
    collection,
    deleteDoc
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB27Sll6CcZFdp2gmPSyh0EMGyvTg4uW24",
    authDomain: "blogs-524a5.firebaseapp.com",
    projectId: "blogs-524a5",
    storageBucket: "blogs-524a5.appspot.com",
    messagingSenderId: "123919069118",
    appId: "1:123919069118:web:c262bfe5df23b3796b93ef",
    measurementId: "G-STZRQF5NM1"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  const analytics = getAnalytics(app);
  
  export {
    auth,
    db,
    storage,
    app,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    ref,
    uploadBytes,
    getDownloadURL,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    addDoc,
    onAuthStateChanged,
    signOut,
    collection
  
  };