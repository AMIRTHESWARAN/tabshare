import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyArEgrWfn6mfAEPa40Dtx-xpMK3oWiAgxA",
    authDomain: "tabshare-cc9db.firebaseapp.com",
    projectId: "tabshare-cc9db",
    storageBucket: "tabshare-cc9db.appspot.com",
    messagingSenderId: "521071629690",
    appId: "1:521071629690:web:c911c26830962fca4e32c3",
    measurementId: "G-SZPCT4T2ET",
    databaseURL: "https://DATABASE_NAME.firebaseio.com"
  };

export const app = initializeApp(firebaseConfig);
