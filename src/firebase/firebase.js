import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDyK-vS9oiCEIZ3xdau8O1SfPoXpTxmy_U",
    authDomain: "react-porfolio.firebaseapp.com",
    databaseURL: "https://react-porfolio.firebaseio.com",
    projectId: "react-porfolio",
    storageBucket: "react-porfolio.appspot.com",
    messagingSenderId: "402733075989",
    appId: "1:402733075989:web:a38171fd1b9e7d3771881c",
    measurementId: "G-D4YKFYR3WD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export const firestore = firebase.firestore()

export const storage = firebase.storage()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;