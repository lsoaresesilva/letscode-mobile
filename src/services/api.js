import * as firebase from 'firebase';

import 'firebase/firestore';
import config from '../config/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// ;export default firebase;
export const firebaseFirestore = firebase.firestore();
/*
export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();
export const firebaseStorage = firebase.storage();

*/
