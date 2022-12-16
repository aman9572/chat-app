import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-pja6yJlVh1yyGEe78GrA8zkm45xwK8o",
    authDomain: "fire-chat-beb6d.firebaseapp.com",
    projectId: "fire-chat-beb6d",
    storageBucket: "fire-chat-beb6d.appspot.com",
    messagingSenderId: "670886454625",
    appId: "1:670886454625:web:c02bb6215f795dcd3fd120",
    measurementId: "G-0J557RX5JC"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }