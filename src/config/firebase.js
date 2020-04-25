import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPpw_FQsS93MPGJdl2mjVLbJSCS1v0QT4",
  authDomain: "memo-app-3e114.firebaseapp.com",
  databaseURL: "https://memo-app-3e114.firebaseio.com",
  projectId: "memo-app-3e114",
  storageBucket: "memo-app-3e114.appspot.com",
  messagingSenderId: "824341986698",
  appId: "1:824341986698:web:a2f7fef3f0360748219c73"
}

firebase.initializeApp(firebaseConfig)

export default firebase