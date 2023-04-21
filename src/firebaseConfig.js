import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyB4SazSe0QUdJRi3SfSnwJ7vdo-K1UpI5g",
    authDomain: "notezapp-42ba5.firebaseapp.com",
    projectId: "notezapp-42ba5",
    storageBucket: "notezapp-42ba5.appspot.com",
    messagingSenderId: "208539219103",
    appId: "1:208539219103:web:09da369fc486d61d51deaa"
};

export default firebase.initializeApp(firebaseConfig);
