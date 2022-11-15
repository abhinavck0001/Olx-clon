import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNBYCKR8WLDiveWaB9W9BIKvxlAU8yCGE",
  authDomain: "olx-app-bd935.firebaseapp.com",
  projectId: "olx-app-bd935",
  storageBucket: "olx-app-bd935.appspot.com",
  messagingSenderId: "479827882587",
  appId: "1:479827882587:web:2bd4ca548588acb4a4c57e",
  measurementId: "G-NKFTQYK0GX"
};

  export default firebase.initializeApp(firebaseConfig)