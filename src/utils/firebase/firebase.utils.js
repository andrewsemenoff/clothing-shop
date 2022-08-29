import { initializeApp } from "firebase/app"; //creates an app instance of firebase
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz1577DJ0uxJ9o0JsPU-4S2ni3d6IT-n8",
  authDomain: "crown-clothing-db-6d69c.firebaseapp.com",
  projectId: "crown-clothing-db-6d69c",
  storageBucket: "crown-clothing-db-6d69c.appspot.com",
  messagingSenderId: "939452106509",
  appId: "1:939452106509:web:9489e6461b2f887e0e1244",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); //creating our app instance of firebase SDK

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); //creating authentication instance;
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore(); // creating database instance;

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  //userAuth - authentication object
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const  signOutUser = async()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);