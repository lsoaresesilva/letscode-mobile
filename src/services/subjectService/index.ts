import { getSnapshot } from './../../helpers';

import { firebaseFirestore } from '../api';
import Assunto from '../../model/Assunto';
import QuestaoFechada from '../../model/QuestaoFechada';
import Alternativa from '../../model/Alternativa';


export class SubjectService {
  public todosAssuntos(): Promise<Assunto>  {
    return new Promise((resolve, reject) => {

      const userRef = firebaseFirestore
      .collection('assuntos');

      userRef.get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        // percorrendo os assuntos
        const assuntos: Assunto[] = docs.map(assunto => {

          // percorrendo as questões fechadas
          const questoesFechadas = assunto.data().questoesFechadas.map((questaoFechada: { alternativas: { id: string; isVerdadeira: boolean; texto: string; }[]; id: string; nomeCurto: string; enunciado: string; dificuldade: number; respostaQuestao: string; sequencia: number; }) => {

            // percorrendo as alternativas
            const alternativas = questaoFechada.alternativas.map((alternativa: { id: string; isVerdadeira: boolean; texto: string; }) => {
              // adicionando as alternativas
              return new Alternativa(alternativa.id, alternativa.isVerdadeira, alternativa.texto);
            })

            // adicionando as questões fechadas
            return new QuestaoFechada(questaoFechada.id,
              questaoFechada.nomeCurto, questaoFechada.enunciado, questaoFechada.dificuldade,
              alternativas, questaoFechada.respostaQuestao, questaoFechada.sequencia)
          })
          const assuntoCriado: Assunto = new Assunto(assunto.id, assunto.data().nome, assunto.data().sequencia, questoesFechadas, assunto.data().importancia);
          assuntoCriado.quantidadeQuestoesFechadas = questoesFechadas.length;
          return assuntoCriado

        });

        resolve(assuntos);

      }).catch(err => {
        reject(err);
      })
    });
  }

  public save(assunto: Assunto): any {
     return new Promise((resolve, reject) => {
      const userRef = firebaseFirestore
        .collection('assuntos').doc(assunto.id).set(assunto.toJSON()).then(() => {
          resolve();
        }).catch(err => {
          reject(new Error(err));
        })
     });
  }

  public delete(id: string): any {
    return new Promise((resolve, reject) => {
      firebaseFirestore
        .collection('assuntos')
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

  public assuntoPorId(id: string): Promise<Assunto> {
    return new Promise((resolve, reject) => {

      const userRef = firebaseFirestore
      .collection('assuntos');
      userRef.doc(id).get().then(snapshot => {

        let docs: any = snapshot;

        const questoesFechadas = docs.data().questoesFechadas.map((questaoFechada: { alternativas: { id: string; isVerdadeira: boolean; texto: string; }[]; id: string; nomeCurto: string; enunciado: string; dificuldade: number; respostaQuestao: string; sequencia: number; }) => {
          // percorrendo as alternativas
          const alternativas = questaoFechada.alternativas.map((alternativa: { id: string; isVerdadeiro: boolean; texto: string; }) => {
            // adicionando as alternativas/ alternativa.isVerdadeira
            console.log('\n\n\n\n-------------->>>>>>>>>>>', alternativa)
            return new Alternativa(alternativa.id, alternativa.isVerdadeiro, alternativa.texto);
          })

          // adicionando as questões fechadas
          return new QuestaoFechada(questaoFechada.id,
            questaoFechada.nomeCurto, questaoFechada.enunciado, questaoFechada.dificuldade,
            alternativas, questaoFechada.respostaQuestao || '', questaoFechada.sequencia)
        })

        const assuntoCriado = new Assunto(docs.id, docs.data().nome, docs.data().sequencia, questoesFechadas);

        resolve(assuntoCriado);

      }).catch(err => {
        reject(err);
      })
    });
  }

  public quantidadeQuestoesRespondidas(usuarioId: string, questaoId: string): Promise<Assunto> {
    return new Promise((resolve, reject) => {

      const userRef = firebaseFirestore
      .collection('assuntos');

      userRef.get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        // percorrendo os assuntos
        const assuntos: Assunto[] = docs.map(assunto => {
          // percorrendo as questões fechadas
          const questoesFechadas = assunto.data().questoesFechadas.map((questaoFechada: any) => questaoFechada.id)
          return new Assunto(assunto.id, assunto.data().nome, assunto.data().sequencia, questoesFechadas, assunto.data().importancia);
        });

        resolve(assuntos);

      }).catch(err => {
        reject(new Error('Erro ao listar os assuntos'));
      })
    });
  }

}
