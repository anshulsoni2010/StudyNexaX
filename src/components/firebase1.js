// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlmfKpIvRfef_1DMFK-yK9Oom6vdThYC8",
  authDomain: "studynexax-62983.firebaseapp.com",
  projectId: "studynexax-62983",
  storageBucket: "studynexax-62983.appspot.com",
  messagingSenderId: "1072777589308",
  appId: "1:1072777589308:web:e6bce4b606acf80af40939",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase  



export { firebase };