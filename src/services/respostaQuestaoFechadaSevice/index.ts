import { getSnapshot } from './../../helpers';

import { firebaseFirestore } from '../api';
import Assunto from '../../model/Assunto';
import QuestaoFechada from '../../model/QuestaoFechada';
import Alternativa from '../../model/Alternativa';
import RespostasQuestaoFechada from '../../model/RespostasQuestaoFechada';

export class RespostaQuestaoFechadaService {

  public enviarResposta(alternativaId: string, questaoId: string, usuarioId: string): any{

    console.log(alternativaId)
    console.log(questaoId)
    console.log(usuarioId)

    return new Promise((resolve, reject) => {
     firebaseFirestore
       .collection('respostaQuestaoFechada').doc().set({
          alternativaId: alternativaId,
          questaoId: questaoId,
          usuarioId: usuarioId
       }).then(resolve).catch(err => {
         console.log('____>>>>', err)
         reject(new Error(err));
       })
    });
  }

  public buscarPorAtributos(alternativaId: string, questaoId: string, usuarioId: string): Promise<RespostasQuestaoFechada | null>{
    return new Promise((resolve, reject) => {

      const userRef = firebaseFirestore
      .collection('respostaQuestaoFechada');

      userRef
      .where('alternativaId', '==', alternativaId)
      .where('questaoId', '==', questaoId)
      .where('usuarioId', '==', usuarioId)
      .limit(1)
      .get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })
        try {
          const resposta = new RespostasQuestaoFechada(String(docs[0].id), docs[0].data().alternativaId, docs[0].data().questaoId, docs[0].data().usuarioId)
          resolve(resposta);
        } catch (error) {
          resolve(null);
        }

      }).catch(err => {
        reject(err);
      })
    });
  }

  public removerResposta(id: string) {
    return new Promise((resolve, reject) => {

      try {
        resolve(firebaseFirestore
          .collection('respostaQuestaoFechada')
          .doc(id)
          .delete())
      } catch (error) {
        reject(error);
      }
     });
  }

  public buscarPorIdUsuario(id: string): Promise<any> {
    return new Promise((resolve, reject) => {

      const userRef = firebaseFirestore
      .collection('respostaQuestaoFechada');

      userRef.where('usuarioId', '==', id).get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        const respostas = docs.map(doc => {
          const resposta: RespostasQuestaoFechada = new RespostasQuestaoFechada(
            String(doc.id),
            doc.data().alternativaId,
            doc.data().questaoId,
            doc.data().usuarioId)
          return resposta
        });


        resolve(respostas);

      }).catch(err => {
        reject(err);
      })
    });
  }

}
