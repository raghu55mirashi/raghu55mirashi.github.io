import { initializeApp } from 'firebase/app'
import { getStorage  } from 'firebase/storage'
import { getFirestore  } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

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
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase)
export const firestore = getFirestore(firebase)
export const storage = getStorage(firebase, 'gs://react-porfolio.appspot.com')
export const database = getDatabase(firebase)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = ()=> signInWithPopup(auth, provider).then(result =>{
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;
})

export default firebase;