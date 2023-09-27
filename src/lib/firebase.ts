import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAlmgOBvteeqzSW_oZo9kWpUZByNbIVoag",
    authDomain: "tuki-proyecto.firebaseapp.com",
    projectId: "tuki-proyecto",
    storageBucket: "tuki-proyecto.appspot.com",
    messagingSenderId: "166426145545",
    appId: "1:166426145545:web:0f0d4363a3adce3e3d59d8",
    measurementId: "G-9RM06LH5Q1"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();