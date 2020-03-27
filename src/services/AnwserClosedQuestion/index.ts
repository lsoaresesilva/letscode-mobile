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

        console.log(anwserClosedQuestion)
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
        console.log("\n\n\n\nPEGOU\n\n\n")
        resolve(ref.id);
      }).catch(err => {
        console.log("\n\n\n\nERROR\n\n\n")
        reject(new Error(err));
      })
    });
  }
}
