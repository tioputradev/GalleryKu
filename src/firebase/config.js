import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcqSLeOsrXozCe2IlIJAyBGEetuPFUgvo",
  authDomain: "weddinggallery-49628.firebaseapp.com",
  databaseURL: "https://weddinggallery-49628.firebaseio.com",
  projectId: "weddinggallery-49628",
  storageBucket: "weddinggallery-49628.appspot.com",
  messagingSenderId: "463938920319",
  appId: "1:463938920319:web:3c8dc8208360a56d04844a",
  measurementId: "G-Q16CYRX6NK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
