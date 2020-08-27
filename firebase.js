import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsWCENhp6No5aVx3jfDxGt77h3wvuS7vQ",
    authDomain: "doapp-bfab6.firebaseapp.com",
    databaseURL: "https://doapp-bfab6.firebaseio.com",
    projectId: "doapp-bfab6",
    storageBucket: "doapp-bfab6.appspot.com",
    messagingSenderId: "908385947263",
    appId: "1:908385947263:web:c1651525cd8a6842d2394a"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
export default firebase;