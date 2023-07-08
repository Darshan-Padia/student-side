// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from "firebase/compat/app"
// import { getDatabase ,Database } from "firebase/database"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBic0nMj0E9BtO7EJEGbBm6nP3p3Nbn3Pk",

    authDomain: "driver-abf39.firebaseapp.com",

    databaseURL:
        "https://driver-abf39-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "driver-abf39",

    storageBucket: "driver-abf39.appspot.com",

    messagingSenderId: "475697492248",

    appId: "1:475697492248:web:c74675ead2f4573859ae6d",

    measurementId: "G-7QSQ0MR1QV",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const dbdb = firebase.database()
const auth = firebase.auth();

export { auth ,dbdb};
