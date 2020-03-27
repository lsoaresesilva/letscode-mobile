import { getSnapshot } from './../../helpers';

import { firebaseFirestore } from '../api';
import Assunto from '../../model/Assunto';
import QuestaoFechada from '../../model/QuestaoFechada';
import Alternativa from '../../model/Alternativa';

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

        const subjects = docs.map(doc => {

          // mapeando as questões para agrupa-las como objeto QuestaoFechada
          const questions = doc.data().questoesFechadas.map((question) => {

            // mapeando as alternativas para agrupa-las como objeto Alternativa
            const alternatives = question.alternativas.map((alternative) => {
              return new Alternativa(alternative.id, alternative.isVerdadeira, alternative.texto);
            })

            return new QuestaoFechada(question.id,
              question.nomeCurto, question.enunciado, question.dificuldade,
              alternatives, question.respostaQuestao, question.sequencia)
          })

          return new Assunto(doc.id, doc.data().nome, doc.data().sequencia, questions)
        })
        .sort((a,b) => a.sequencia < b.sequencia ? -1 : 1)

         resolve(subjects);

      }).catch(err => {
        reject(new Error(err));
      })
    });
  }
}
