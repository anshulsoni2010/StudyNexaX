import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDlmfKpIvRfef_1DMFK-yK9Oom6vdThYC8",
  authDomain: "studynexax-62983.firebaseapp.com",
  projectId: "studynexax-62983",
  storageBucket: "studynexax-62983.appspot.com",
  messagingSenderId: "1072777589308",
  appId: "1:1072777589308:web:e6bce4b606acf80af40939",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };