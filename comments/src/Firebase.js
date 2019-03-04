import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB0d6hBegrMZVhfXp2zu8XmkjE3STxhtOE",
    authDomain: "comments-reactjs2019.firebaseapp.com",
    databaseURL: "https://comments-reactjs2019.firebaseio.com",
    projectId: "comments-reactjs2019",
    storageBucket: "comments-reactjs2019.appspot.com",
    messagingSenderId: "198147576719"
};
firebase.initializeApp(config);

export const database = firebase.database();