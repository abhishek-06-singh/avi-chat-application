import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBnsKzK2j4xrA_7Lm9xrhUSaArXJepWphQ",
    authDomain: "avi-chat-33174.firebaseapp.com",
    projectId: "avi-chat-33174",
    storageBucket: "avi-chat-33174.appspot.com",
    messagingSenderId: "639064088928",
    appId: "1:639064088928:web:bdd73be4b71862d2fc7e05",
  })
  .auth();
