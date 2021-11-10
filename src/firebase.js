import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhNbBZ5R-ohe-vT0knnw5u44q7Q9S6ptw",
  authDomain: "linkedin-clone-79523.firebaseapp.com",
  projectId: "linkedin-clone-79523",
  storageBucket: "linkedin-clone-79523.appspot.com",
  messagingSenderId: "66716139101",
  appId: "1:66716139101:web:af1c3021b7c3e1c5f857b4",
  measurementId: "G-VGRNT561LB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
