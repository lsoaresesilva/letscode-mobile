/* eslint-disable class-methods-use-this */
// @flow
import { sha256 } from 'js-sha256';
import { useDispatch } from 'react-redux';
import User from '../../model/User';

import { signOut as signOutAction } from '../../store/modules/auth/actions';

import { firebaseFirestore } from '../api';

function getSnapshot(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>): Promise<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>> {
  return new Promise((resolve, reject) => {
    snapshot.forEach(doc => {
      resolve(doc);
    });
  })
}

export class AuthService {
  signIn(user: User): any {
    return new Promise((resolve, reject) => {

     const userRef = firebaseFirestore
       .collection('usuarios')
        .where('email', '==', user.email);

      userRef.get().then(snapshot => {
        getSnapshot(snapshot).then(doc => {
          const filteredUser: User = new User(doc.id,doc.data().nome,doc.data().email, doc.data().senha);

          if (filteredUser) {

            if (filteredUser.password === sha256(user.password)) {
              filteredUser.password = sha256(filteredUser.password);
              resolve(filteredUser);
            } else {
              reject(new Error('Password does not match'));
             }

           } else {
             reject(new Error('Email does not exist'));
           }

        })

      }).catch(err => {
        reject(new Error(err));
      })
    });
  }

  signOut() {
    useDispatch(signOutAction());
  }
}
