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

  getAll(): Promise<RespostasQuestaoFechada> {
    const service = new AnwserClosedQuestionService();
    return service.getAllAnwserClosedQuestions();
  }

  add(resposta: RespostasQuestaoFechada) {
    const service = new AnwserClosedQuestionService();
    return service.addAnwserClosedQuestion(resposta.alternativaId, resposta.questaoId, resposta.usuarioId);
  }
}
