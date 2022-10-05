import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDHJ_V4weW9OUb8B4juvMV53q8HZciWOuc",
    authDomain: "myfirestore-c2ce3.firebaseapp.com",
    projectId: "myfirestore-c2ce3",
    storageBucket: "myfirestore-c2ce3.appspot.com",
    messagingSenderId: "375476865113",
    appId: "1:375476865113:web:37c5fa693e1380b3470948",
    measurementId: "G-4C4PEW69FE"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);