import QuestaoFechada from "../QuestaoFechada";

export default class Assunto  {

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
}
