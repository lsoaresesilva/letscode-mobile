import { firebaseFirestore } from '../api';
import RespostasQuestaoFechada from '../../model/RespostasQuestaoFechada';

export class AnwserClosedQuestionService {
  public getAllAnwserClosedQuestions(): any {
    return new Promise((resolve, reject) => {

     const userRef = firebaseFirestore
       .collection('respostaQuestaoFechada');

      userRef.get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        const anwserClosedQuestion = docs.map(doc => {
          return new RespostasQuestaoFechada(doc.data().alternativaId, doc.data().questaoId, doc.data().usuarioId)
        })
        resolve(anwserClosedQuestion);

      }).catch(err => {
        reject(new Error(err));
      })
    });
  }
  public getAnwserClosedQuestions(respostaQuestaoFechada: RespostasQuestaoFechada): any {
    return new Promise((resolve, reject) => {

     const userRef = firebaseFirestore
       .collection('respostaQuestaoFechada');

      userRef.get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        const anwserClosedQuestion = docs.map(doc => {
          const resposta = new RespostasQuestaoFechada(doc.data().alternativaId, doc.data().questaoId, doc.data().usuarioId)
          resposta.id = doc.id;
          return resposta;
        }).filter(item => {
          if(item.alternativaId === respostaQuestaoFechada.alternativaId &&
            item.questaoId === respostaQuestaoFechada.questaoId &&
            item.usuarioId === respostaQuestaoFechada.usuarioId) {
              return item;
            }
        })

        resolve(anwserClosedQuestion);

      }).catch(err => {
        reject(new Error(err));
      })
    });
  }
  public addAnwserClosedQuestion(anwser: RespostasQuestaoFechada) {
    return new Promise((resolve, reject) => {
     const userRef = firebaseFirestore
       .collection('respostaQuestaoFechada');

      userRef.add({
        alternativaId: anwser.alternativaId,
        questaoId: anwser.questaoId,
        usuarioId: anwser.usuarioId
      }).then(ref => {
        resolve(ref.id);
      }).catch(err => {
        reject(new Error(err));
      })
    });
  }
  public removeAnwserClosedQuestion(id: string) {
    return new Promise((resolve, reject) => {
      firebaseFirestore
        .collection('respostaQuestaoFechada')
        .doc(id)
        .delete()
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject(new Error('Não foi possivel deletar esse documento'));
        })
     });
  }
}
