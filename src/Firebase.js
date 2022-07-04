import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyCJwmWeOsjQinJzFRUNENDag-HEPoVqf-A",
    authDomain: "firechat-65932.firebaseapp.com",
    projectId: "firechat-65932",
    storageBucket: "firechat-65932.appspot.com",
    messagingSenderId: "569569329006",
    appId: "1:569569329006:web:be77d8dee77c560970cb7f",
    measurementId: "G-X967P8H350"
})

const database = firebaseApp.firestore()
const authentication = firebase.auth()

export { database,authentication }
