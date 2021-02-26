import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database;

// we need a config here;

const config = {
    apiKey: "AIzaSyBGS5JTz_P3oX1M-JuIrbp2YJRIlDvYdHU",
    authDomain: "netflix-90fd4.firebaseapp.com",
    projectId: "netflix-90fd4",
    storageBucket: "netflix-90fd4.appspot.com",
    messagingSenderId: "695643799052",
    appId: "1:695643799052:web:94243c334e7724c36af829"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };