import { AnwserClosedQuestionService } from './../../services/AnwserClosedQuestion'
import { RespostaQuestaoFechadaService } from './../../services/respostaQuestaoFechadaSevice'

export default class RespostasQuestaoFechada  {

  constructor(id: string, alternativaId: string, questaoId: string, usuarioId: string) {
    this.id = id;
    this.alternativaId = alternativaId;
    this.questaoId = questaoId;
    this.usuarioId = usuarioId;
  }

  alternativaId: string;
  questaoId: string;
  usuarioId: string;
  id: string;

  getAll(): Promise<RespostasQuestaoFechada> {
    return new AnwserClosedQuestionService().getAllAnwserClosedQuestions();
  }

  buscar(): any {
    const service = new RespostaQuestaoFechadaService();
    return service.buscarPorAtributos(this.alternativaId, this.questaoId, this.usuarioId);
  }

  submeter() {
    const service = new RespostaQuestaoFechadaService();
    return service.enviarResposta(this.alternativaId, this.questaoId, this.usuarioId);
  }

  delete() {
    const service = new RespostaQuestaoFechadaService();
    return service.removerResposta(this.id);
  }

  isQuestaoCorreta() {

  }

  static buscarRespostasPorUsuario(idUsuario: string) {
    const service = new RespostaQuestaoFechadaService();
    return service.buscarPorIdUsuario(idUsuario);
  }

}
