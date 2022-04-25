import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCEuhcaXA4DH6FqeriT8uejyjGA13Z3-bc",
  authDomain: "wireless-8f8d0.firebaseapp.com",
  databaseURL: "https://wireless-8f8d0-default-rtdb.firebaseio.com",
  projectId: "wireless-8f8d0",
  storageBucket: "wireless-8f8d0.appspot.com",
  messagingSenderId: "585736182916",
  appId: "1:585736182916:web:b62006683d4c59d88cb6d1",
  measurementId: "G-P9SR6SHRLS"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()