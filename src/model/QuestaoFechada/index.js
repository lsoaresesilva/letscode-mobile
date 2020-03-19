export default class QuestaoFechada {
  constructor(
    id: string,
    nomeCurto: string,
    enunciado: string,
    dificuldade: string,
    alternativas: any,
    respostaQuesta: any,
    sequencia: any
  ) {
    this.id = id;
    this.nomeCurto = nomeCurto;
    this.enunciado = enunciado;
    this.dificuldade = dificuldade;
    this.alternativas = alternativas;
    this.respostaQuesta = respostaQuesta;
    this.sequencia = sequencia;
  }

  id: string;

  nomeCurto: string;

  enunciado: string;

  dificuldade: string;

  alternativas: any;

  respostaQuesta: any;

  sequencia: any;
}
