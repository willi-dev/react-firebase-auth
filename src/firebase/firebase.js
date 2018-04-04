import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC3XNEShv7NJDGigw2wcYqTmtP7CvOOG70",
  authDomain: "react-firebase-auth-7b250.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-7b250.firebaseio.com",
  projectId: "react-firebase-auth-7b250",
  storageBucket: "react-firebase-auth-7b250.appspot.com",
  messagingSenderId: "771221081098"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if( !firebase.apps.length ){
  firebase.initializeApp(config);  
}



const auth firebase.auth();

export {
  auth,
}