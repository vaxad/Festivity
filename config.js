import firebase from "@firebase/app-compat";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBIFUy2UtJzlbTrHS2GdsaLr-CKKo5m6g0",
    authDomain: "festivity0-6afdc.firebaseapp.com",
    projectId: "festivity0-6afdc",
    storageBucket: "festivity0-6afdc.appspot.com",
    messagingSenderId: "828010837853",
    appId: "1:828010837853:web:d4586d64b331e5928e5ab4",
    measurementId: "G-ECX70XY601"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    
}
