import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAV2WPrme6LjrnTEk07j1Xlx_QoSOmYsXk",
    authDomain: "miniblog-curso-reactjs.firebaseapp.com",
    projectId: "miniblog-curso-reactjs",
    storageBucket: "miniblog-curso-reactjs.appspot.com",
    messagingSenderId: "41939716023",
    appId: "1:41939716023:web:24e6d7a8ee8af5f8564a32"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }