// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwSxJojnYNo9ZFKHmO59sKVPdEhCR641A",
    authDomain: "comp1930database.firebaseapp.com",
    databaseURL: "https://comp1930database.firebaseio.com",
    projectId: "comp1930database",
    storageBucket: "comp1930database.appspot.com",
    messagingSenderId: "908131063499"
};
firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());