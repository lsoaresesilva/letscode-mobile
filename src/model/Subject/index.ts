export default class Subject  {

  constructor(id: string, nome: string, sequencia: number, questoesFechadas: any) {
    this.id = id;
    this.nome = nome;
    this.sequencia = sequencia;
    this.questoesFechadas = questoesFechadas;

  }

  id: string;
  nome: string;
  sequencia: number;
  questoesFechadas: any;
}
