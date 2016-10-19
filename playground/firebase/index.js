import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyA7w8cNRGs3tvDEkYWf7bTXPoI1zfu69qg",
   authDomain: "todo-app-1eb1b.firebaseapp.com",
   databaseURL: "https://todo-app-1eb1b.firebaseio.com",
   storageBucket: "todo-app-1eb1b.appspot.com",
   messagingSenderId: "457490614131"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
   app: {
      name: 'Todo App',
      version: '1.0.1'
   },
   isRunning: true,
   user: {
      name: 'Jacob',
      age: 25
   }
});

// var notesRef = firebaseRef.child('todos');
//
// notesRef.on('child_changed', (snapshot) => {
//    console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_added', (snapshot) => {
//    console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//    console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//    text: 'Walk the dog'
// });
//
// var newNoteRef = notesRef.push({
//    text: 'Something Else'
// });

/////////////////////////////////////////////////////////////////////////////

// var logUserData = (snapshot) => {
//    console.log('Got value', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logUserData);
//
// firebaseRef.child('user').update({name: 'Tom'});
// firebaseRef.child('app').update({name: 'Tom'}); //will not cause the on to fire
//
// firebaseRef.off('value', logUserData);

// firebaseRef.child('app').once('value').then((snapshot) => {
//    console.log('Got entire db', snapshot.key, snapshot.val());
// }, (e) => {
//    console.log('Unable to fetch value', e);
// })

/////////////////////////////////////////////////////////////////////////////

// firebaseRef.child('app').update({
//    version: '2.0',
//    name: null
// });

// firebaseRef.child('app/name').remove();

/////////////////////////////////////////////////////////////////////////////

// firebaseRef.update({
//    'app/name': 'Todo Application',
//    'user/name': 'Tom'
// })

// firebaseRef.child('app').update({name: 'Todo Web App'});
// firebaseRef.child('user').update({name: 'Mike'});

/////////////////////////////////////////////////////////////////////////////

// firebaseRef.update({
//    isRunning: false,
//    'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//    name: 'Todo Application'
// }).then(() => {
//    console.log('Update worked!');
// }, (e) => {
//    console.log('Update failed');
// });
