import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCnAtxW4KbXXwSSRwe4liLlj6UJzHyiV-0",
  authDomain: "anubhareactplan.firebaseapp.com",
  databaseURL: "https://anubhareactplan.firebaseio.com",
  projectId: "anubhareactplan",
  storageBucket: "anubhareactplan.appspot.com",
  messagingSenderId: "471134760383",
  appId: "1:471134760383:web:9ef41a191061373303050a",
  measurementId: "G-61ZVLG3DJE"
};
  firebase.initializeApp(Config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;