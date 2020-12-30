import * as firebase from 'firebase';
require('@firebase/firestore');
  var firebaseConfig = {
    apiKey: "AIzaSyAP9fflzjBlpAnbXyK_BE3h8Mc13QHUeZs",
    authDomain: "story-hub-the-story-app.firebaseapp.com",
    projectId: "story-hub-the-story-app",
    storageBucket: "story-hub-the-story-app.appspot.com",
    messagingSenderId: "402982321406",
    appId: "1:402982321406:web:d4fa1ef02993681fe579af"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();