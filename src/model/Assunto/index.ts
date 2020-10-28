import QuestaoFechada from "../QuestaoFechada";
import {SubjectService} from '../../services/subjectService'
import Alternativa from "../Alternativa";
import RespostasQuestaoFechada from "../RespostasQuestaoFechada";
import { RespostaQuestaoFechadaService } from "../../services/respostaQuestaoFechadaSevice";
export default class Assunto {

  constructor(id: string, nome: string, sequencia: number, questoesFechadas: QuestaoFechada[], importancia: string) {
    this.id = id;
    this.nome = nome;
    this.importancia = importancia;
    this.sequencia = sequencia;
    this.questoesFechadas = questoesFechadas;
  }

  importancia: string;
  id: string;
  nome: string;
  sequencia: number;
  questoesFechadas: QuestaoFechada[];
  porcentagemQuestoesRespondidas: number = 0;
  porcentagemGrauDificuldade!: number;

  toJSON(): any {

    /**
     * const jsonQuestoesFechadas = this.questoesFechadas.map((questao: QuestaoFechada) => {

      const jsonAlternativas = questao.alternativas.map((alternativa: Alternativa) => {
        return {
          id: alternativa.id,
          isVerdadeira: alternativa.isVerdadeiro,
          texto: alternativa.texto
        }
      })



      return {
        alternativas: jsonAlternativas,
        dificuldade: questao.dificuldade,
        enunciado: questao.enunciado,
        id: questao.id,
        nomeCurto: questao.nomeCurto,
        respostaQuestao: questao.respostaQuestao,
        sequencia: questao.sequencia
      }
    })
     */

     /**
      * const jsonQuestoesFechadas = this.questoesFechadas.map((questao: QuestaoFechada) => {
       return {
         id: questao.id,
         alternativa: [],
        dificuldade: questao.dificuldade,
        enunciado: questao.enunciado,
        nomeCurto: questao.nomeCurto,
        respostaQuestao: questao.respostaQuestao,
        sequencia: questao.sequencia
       }
     })
      */

    const questoes = JSON.parse(JSON.stringify(this.questoesFechadas));

    return {
      nome: this.nome || '',
      sequencia: this.sequencia || '',
      questoesFechadas: questoes || [],
      questoesProgramacao: [],
      importancia: 'this.importancia'
    }
  }

  quantidadeQuestoesFechadas(): number {
    return this.questoesFechadas.length
  }

  static ordenarPorSequencia(arrayAssuntos: Assunto[]): Assunto[] {
    return arrayAssuntos.sort((a,b) => a.sequencia < b.sequencia ? -1 : 1);
  }

  static porId(id: string): Promise<Assunto> {
    return new SubjectService().assuntoPorId(id);
  }

  static getAll(): Promise<any> {
    return new SubjectService().todosAssuntos();
  }

  save(): Promise<Assunto> {
    return new SubjectService().save(new Assunto(this.id, this.nome, this.sequencia, this.questoesFechadas));
  }

  delete(): Promise<any> {
    return new SubjectService().delete(this.id);
  }

  static async quantidadeQuestoesRespondidas(usuarioId: string, assuntoId: string): Promise<any> {

    const assunto: Assunto = await Assunto.porId(assuntoId);
    const questoesIds = assunto.questoesFechadas.map(questao => questao.id);
    const respostasUsuario: [RespostasQuestaoFechada] = await new RespostasQuestaoFechada.buscarRespostasPorUsuario(
      usuarioId
      );

    const idRespostasUsuarios = respostasUsuario
    .map(resposta => resposta.questaoId)

    const respostasDoAssunto = idRespostasUsuarios.filter(r => questoesIds.indexOf(r) !== -1)

    return respostasDoAssunto.length
  }

/*
  static async porcentagemQuestoesRespondidas(usuarioId: string, assuntoId: string): Promise<any> {
    const assunto: Assunto = await Assunto.porId(assuntoId);
    const questoesIds = assunto.questoesFechadas.map(questao => questao.id);
    const respostasUsuario: [RespostasQuestaoFechada] = await new RespostasQuestaoFechada.buscarRespostasPorUsuario(
      usuarioId
      );
      //console.log('P3 >>>>> ', respostasUsuario);
    const idRespostasUsuarios = respostasUsuario
    .map(resposta => resposta.questaoId)
    const respostasDoAssunto = idRespostasUsuarios.filter(r => questoesIds.indexOf(r) !== -1)
    //console.log(([...new Set(respostasDoAssunto)].length * 100) / questoesIds.length)
    assunto.porcentagemQuestoesRespondidas = ([...new Set(respostasDoAssunto)].length * 100) / questoesIds.length;
   /// console.log(assunto.porcentagemQuestoesRespondidas)
    return ([...new Set(respostasDoAssunto)].length * 100) / questoesIds.length
  }
*/

  async calcularPorcentagemQuestaoRespondida(usuarioId: string, assuntoId: string): Promise<any> {
    const assunto: Assunto = await Assunto.porId(assuntoId);
    const questoesIds = assunto.questoesFechadas.map(questao => questao.id);
    const respostasUsuario: [RespostasQuestaoFechada] = await RespostasQuestaoFechada.buscarRespostasPorUsuario(
      usuarioId
      );

   // console.log('\n\n\n\n\n\n\n\n\n\n\n',respostasUsuario,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
    const idRespostasUsuarios = respostasUsuario.map(resposta => resposta.questaoId)



    const respostasDoAssunto = idRespostasUsuarios.filter(r => questoesIds.indexOf(r) !== -1)
    const aaa = respostasUsuario.filter(r => questoesIds.indexOf(r.questaoId) !== -1)

    //console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
    //console.log(respostasDoAssunto, '-----', aaa)
    this.questoesFechadas.map((a: QuestaoFechada, index) => {
      console.log('________+', aaa.filter(el => el.questaoId === a.id))
      const patolino = aaa.filter(el => el.questaoId === a.id);
      if(patolino.length === 0) {
        a.respostaQuestao = null
      } else {
        a.respostaQuestao = patolino[0]
      }
      return a;
      const ba = a;
      if(respostasDoAssunto.includes(a.id)) {
        //;/console.log('VVVVVVVVV-VVVV----------VVVVVVVVVVV_-------VVVVVVVVV____________VVVVVVVVVVV',aaa[index].id)
        // ba.respostaQuestao = 'a.id'
        ba.respostaQuestao = null //aaa[index]
      } else {
        ba.respostaQuestao = null
      }
      return ba
    })

    assunto.porcentagemQuestoesRespondidas = ([...new Set(respostasDoAssunto)].length * 100) / questoesIds.length;
    this.porcentagemQuestoesRespondidas =  ([...new Set(respostasDoAssunto)].length * 100) / questoesIds.length;

  }

}

/**
 *

 */
