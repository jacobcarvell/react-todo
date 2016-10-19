import firebase from 'firebase';

try {
   var config = {
      apiKey: "AIzaSyA7w8cNRGs3tvDEkYWf7bTXPoI1zfu69qg",
      authDomain: "todo-app-1eb1b.firebaseapp.com",
      databaseURL: "https://todo-app-1eb1b.firebaseio.com",
      storageBucket: "todo-app-1eb1b.appspot.com",
      messagingSenderId: "457490614131"
   };

   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
