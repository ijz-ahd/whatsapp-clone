import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPMFz-u-1kBCg_jBUNqD1suHEGLtwvwWY",
  authDomain: "whatsapp-clone-b7254.firebaseapp.com",
  projectId: "whatsapp-clone-b7254",
  storageBucket: "whatsapp-clone-b7254.appspot.com",
  messagingSenderId: "583564558420",
  appId: "1:583564558420:web:c77bad1d2a741816cfadc1",
  measurementId: "G-HY1LW5ZDQ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
