import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaPd3l_KR_sY1JMMY2zTG6PWU4HNRj9X8",
  authDomain: "medium-clone-657b1.firebaseapp.com",
  projectId: "medium-clone-657b1",
  storageBucket: "medium-clone-657b1.appspot.com",
  messagingSenderId: "40371824062",
  appId: "1:40371824062:web:8d7a67848f473bebf145ef",
  measurementId: "G-M8CRYVF59B",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider,  db };
