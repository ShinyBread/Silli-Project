import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth, onAuthStateChanged, type User} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {writable} from "svelte/store"


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

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();