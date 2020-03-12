import { getSnapshot } from './../../helpers';

import { firebaseFirestore } from '../api';
import Subject from '../../model/Subject';

export class SubjectService {
  getAllSubjects(): any {
    return new Promise((resolve, reject) => {

     const userRef = firebaseFirestore
       .collection('assuntos');

      userRef.get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        const docsObjects = docs.map(doc => {
          return new Subject(doc.id, doc.data().nome, doc.data().sequencia, doc.data().questoesFechadas)
        })

         resolve(docsObjects);

      }).catch(err => {
        console.tron.log('error')
        reject(new Error(err));
      })
    });
  }
}
