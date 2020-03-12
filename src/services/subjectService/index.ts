/* eslint-disable class-methods-use-this */
// @flow
import { sha256 } from 'js-sha256';
import { useDispatch } from 'react-redux';
import User from '../../model/User';
import { getSnapshot } from './../../helpers';

import { signOut as signOutAction } from '../../store/modules/auth/actions';

import { firebaseFirestore } from '../api';
import Subject from '../../scenes/Subject';


export class SubjectService {
  getAllSubjects(): any {
    return new Promise((resolve, reject) => {

     const userRef = firebaseFirestore
       .collection('assuntos');

      userRef.get().then(snapshot => {
        getSnapshot(snapshot).then(doc => {

          const assuntos: Subject = new Subject();


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
