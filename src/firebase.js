import firebase from 'firebase' ;

var firebaseConfig = {
    apiKey: "AIzaSyCeBbHDpaAEE_ua3Y8dtfv4MdKSGJZI8jQ",
    authDomain: "react-my-burger-60c85.firebaseapp.com",
    databaseURL: "https://react-my-burger-60c85-default-rtdb.firebaseio.com",
    projectId: "react-my-burger-60c85",
    storageBucket: "react-my-burger-60c85.appspot.com",
    messagingSenderId: "996495748270",
    appId: "1:996495748270:web:dabdddaca959892b7e513f",
    measurementId: "G-FR82XHXM13"
  };
  // Initialize Firebase
  const firebaseDb =  firebase.initializeApp(firebaseConfig);

  export default firebaseDb;