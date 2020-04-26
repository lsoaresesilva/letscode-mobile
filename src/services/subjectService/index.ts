import { getSnapshot } from './../../helpers';

import { firebaseFirestore } from '../api';
import Assunto from '../../model/Assunto';
import QuestaoFechada from '../../model/QuestaoFechada';
import Alternativa from '../../model/Alternativa';

export class SubjectService {
  public getAllSubjects(): any {
    return new Promise((resolve, reject) => {

      const userRef = firebaseFirestore
      .collection('assuntos');

      userRef.get().then(snapshot => {

        const docs: any[] = [];
        snapshot.forEach(doc => {
          docs.push(doc)
        })

        // percorrendo os assuntos
        const assuntos = docs.map(assunto => {

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

          // criando os assuntos
          return new Assunto(assunto.id, assunto.data().nome, assunto.data().sequencia, questoesFechadas)

        });

        resolve(assuntos);

      }).catch(err => {
        reject(new Error('Erro ao listar os assuntos'));
      })
    });
  }

  public save(assunto: Assunto): any {
     return new Promise((resolve, reject) => {
      const userRef = firebaseFirestore
        .collection('assuntos').doc(assunto.id).set({
          nome: assunto.nome,
          sequencia: assunto.sequencia,
          questoesFechadas: [],
          questoesProgramacao: [],
          importancia: ''
        }).then(() => {
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

  public quantidadeQuestoesRespondidas(id: string): any {

  }

}
