import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDi7C5uBceyGEROBLwDGYta7ZcXw7UTIVA",
  authDomain: "crown-f9cf6.firebaseapp.com",
  databaseURL: "https://crown-f9cf6.firebaseio.com",
  projectId: "crown-f9cf6",
  storageBucket: "crown-f9cf6.appspot.com",
  messagingSenderId: "278885132427",
  appId: "1:278885132427:web:f4ad38e37bb091c6380c8e",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (snapShot.exists) {
    console.log("user already exists", snapShot.data());
  } else {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
