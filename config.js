import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = { 
    apiKey: "AIzaSyD6mM_LZWofKx1v4eGORTQiEcBoVZDxCB0",
    authDomain: "pro-67-f6ca1.firebaseapp.com",
    databaseURL: "https://pro-67-f6ca1-default-rtdb.firebaseio.com",
    projectId: "pro-67-f6ca1",
    storageBucket: "pro-67-f6ca1.appspot.com",
    messagingSenderId: "331651013164",
    appId: "1:331651013164:web:f7808f28c17062b9ad0f89",
    measurementId: "G-C5S8SC3M89"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();