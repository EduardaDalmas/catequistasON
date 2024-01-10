// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa02zUXPVWGJnRNlIPoAO8kjSNBgjKtec",
  authDomain: "catequistason.firebaseapp.com",
  projectId: "catequistason",
  storageBucket: "catequistason.appspot.com",
  messagingSenderId: "622011094362",
  appId: "1:622011094362:web:2e6c76c8be22bd08ab4f63",
  measurementId: "G-0P46B69N0T",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
