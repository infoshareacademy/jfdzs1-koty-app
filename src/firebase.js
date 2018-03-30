import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBu_kev8iXtDFrOWWQxPOjD6jzFTatLotU",
    authDomain: "unijne-dotacje.firebaseapp.com",
    databaseURL: "https://unijne-dotacje.firebaseio.com",
    projectId: "unijne-dotacje",
    storageBucket: "unijne-dotacje.appspot.com",
    messagingSenderId: "891843401015"
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database()
export const auth = firebase.auth()