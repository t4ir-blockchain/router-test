import firebase from 'firebase'
  // Your web app's Firebase configuration
var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "t4ir-blockchain-test.firebaseapp.com",
  databaseURL: "https://t4ir-blockchain-test.firebaseio.com",
  projectId: "t4ir-blockchain-test",
  storageBucket: "t4ir-blockchain-test.appspot.com",
  messagingSenderId: "1003967591121",
  appId: "1:1003967591121:web:e16145f052fe38a1f38bf0",
  measurementId: "G-YQVWJLQ6PZ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()