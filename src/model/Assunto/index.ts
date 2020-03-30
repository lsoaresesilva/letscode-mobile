import QuestaoFechada from "../QuestaoFechada";
import {SubjectService} from '../../services/subjectService'
export default class Assunto {

  constructor(id: string, nome: string, sequencia: number, questoesFechadas: QuestaoFechada[]) {
    this.id = id;
    this.nome = nome;
    this.sequencia = sequencia;
    this.questoesFechadas = questoesFechadas;
  }

  id: string;
  nome: string;
  sequencia: number;
  questoesFechadas: QuestaoFechada[];

  static ordenarPorSequencia(arrayAssuntos: Assunto[]): Assunto[] {
    return arrayAssuntos.sort((a,b) => a.sequencia < b.sequencia ? -1 : 1);
  }

  static quantidadeQuestoesFechadas(assunto: Assunto) {
    return assunto.questoesFechadas.length;
  }

  static getAll(): Promise<any> {
    return new SubjectService().getAllSubjects();
  }

  save(): Promise<Assunto> {
    return new SubjectService().save(new Assunto(this.id, this.nome, this.sequencia, this.questoesFechadas));
  }

  delete(): Promise<any> {
    return new SubjectService().delete(this.id);
  }

}
