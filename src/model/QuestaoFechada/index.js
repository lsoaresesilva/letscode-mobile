import Alternativa from '../Alternativa';

export default class QuestaoFechada {
  constructor(
    id: string,
    nomeCurto: string,
    enunciado: string,
    dificuldade: number,
    alternativas: Alternativa[],
    respostaQuestao: string,
    sequencia: number
  ) {
    this.id = id;
    this.nomeCurto = nomeCurto;
    this.enunciado = enunciado;
    this.dificuldade = dificuldade;
    this.alternativas = alternativas;
    this.respostaQuestao = respostaQuestao;
    this.sequencia = sequencia;
  }

  id: string;

  nomeCurto: string;

  enunciado: string;

  dificuldade: number;

  alternativas: Alternativa[];

  respostaQuestao: string;

  sequencia: number;
}
