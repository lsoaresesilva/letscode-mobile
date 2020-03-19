/* eslint-disable class-methods-use-this */
// @flow
import { sha256 } from 'js-sha256';
import { useDispatch } from 'react-redux';
import Usuario from '../../model/Usuario';
import { getSnapshot } from './../../helpers';

import { signOut as signOutAction } from '../../store/modules/auth/actions';

import { firebaseFirestore } from '../api';


export class AuthService {
  signIn(user: Usuario): any {
    return new Promise((resolve, reject) => {

     const userRef = firebaseFirestore
       .collection('usuarios')
        .where('email', '==', user.email);

      userRef.get().then(snapshot => {
        getSnapshot(snapshot).then(doc => {
          const filteredUser: Usuario = new Usuario(doc.id,doc.data().nome,doc.data().email, doc.data().senha);

          if (filteredUser) {

            if (filteredUser.senha === sha256(user.senha)) {
              filteredUser.senha = sha256(filteredUser.senha);
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
