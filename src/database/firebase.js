import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBAZr843fWf8Sz_5UegZ9MRirL-LBNfW6A",
    authDomain: "messaging-app-697ee.firebaseapp.com",
    databaseURL: "https://messaging-app-697ee.firebaseio.com",
    projectId: "messaging-app-697ee",
    storageBucket: "messaging-app-697ee.appspot.com",
    messagingSenderId: "685649527527",
    appId: "1:685649527527:web:c4ecee23e1930359c0d842",
    measurementId: "G-Z1V21CRM3Z"
  };
  
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }