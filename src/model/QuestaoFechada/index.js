import Alternativa from '../Alternativa';
import RespostasQuestaoFechada from '../RespostasQuestaoFechada';

export default class QuestaoFechada {
  constructor(
    id: string,
    nomeCurto: string,
    enunciado: string,
    dificuldade: number,
    alternativas: Alternativa[],
    respostaQuestao: RespostasQuestaoFechada | null,
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

  respostaQuestao: RespostasQuestaoFechada | null;

  sequencia: number;

  isRespondida(): number {
    return this.id;
  }

  toJSON() {
    const alternativasJson = this.alternativas.map((abba: Alternativa) =>
      abba.toJSON()
    );

    return {
      alternativas: alternativasJson,
      dificuldade: this.dificuldade,
      enunciado: this.enunciado,
      id: this.id,
      nomeCurto: this.nomeCurto,
      respostaQuestao: this.respostaQuestao,
    };
  }
}
