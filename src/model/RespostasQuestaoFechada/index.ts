import { AnwserClosedQuestionService } from './../../services/AnwserClosedQuestion'

export default class RespostasQuestaoFechada  {

  constructor(alternativaId: string, questaoId: string, usuarioId: number) {
    this.alternativaId = alternativaId;
    this.questaoId = questaoId;
    this.usuarioId = usuarioId;
  }

  alternativaId: string;
  questaoId: string;
  usuarioId: number;
  id: string;

  getAll(): Promise<RespostasQuestaoFechada> {
    return new AnwserClosedQuestionService().getAllAnwserClosedQuestions();
  }

  static get(resposta: RespostasQuestaoFechada): RespostasQuestaoFechada {
    return new AnwserClosedQuestionService().getAnwserClosedQuestions(resposta);
  }

  add(resposta: RespostasQuestaoFechada) {
    return new AnwserClosedQuestionService()
    .addAnwserClosedQuestion(new RespostasQuestaoFechada(this.alternativaId, this.questaoId, this.usuarioId));
  }

  delete() {
    return new AnwserClosedQuestionService()
    .removeAnwserClosedQuestion(this.id);
  }
}
