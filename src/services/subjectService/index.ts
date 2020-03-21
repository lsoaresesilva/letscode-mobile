import { getSnapshot } from './../../helpers';

import { firebaseFirestore } from '../api';
import Assunto from '../../model/Assunto';

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
          return new Assunto(doc.id, doc.data().nome, doc.data().sequencia, doc.data().questoesFechadas)
        }).sort((a,b) => a.sequencia < b.sequencia ? -1 : 1)

         resolve(docsObjects);

      }).catch(err => {
        console.tron.log('error')
        reject(new Error(err));
      })
    });
  }
}
