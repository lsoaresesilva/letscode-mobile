/* eslint-disable no-undef */
import RespostasQuestaoFechada from '../../src/model/RespostasQuestaoFechada';

describe('Testes de RespostaQuestaoFechadas', () => {
  it('Deve cadastrar uma resposta', async () => {
    const resposta = new RespostasQuestaoFechada('teste', 'teste', 'teste');
    await resposta.add();
    const respostaCadastrada = await RespostasQuestaoFechada.get(resposta);
    resposta.id = respostaCadastrada[0].id;
    await resposta.delete();
    expect(resposta.id).toEqual(respostaCadastrada[0].id);
  });
});
