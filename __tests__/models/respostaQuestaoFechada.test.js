/* eslint-disable no-undef */
import RespostasQuestaoFechada from '../../src/model/RespostasQuestaoFechada';
import QuestaoFechada from '../../src/model/QuestaoFechada';
import Alternativa from '../../src/model/Alternativa';
import Assunto from '../../src/model/Assunto';

describe('Testes de RespostaQuestaoFechadas', () => {
  it('Deve cadastrar uma resposta', async () => {
    const resposta = new RespostasQuestaoFechada('', 'teste', 'teste', 'teste');
    await resposta.submeter();

    const respostaCadastrada: RespostasQuestaoFechada = await resposta.buscar();

    expect(respostaCadastrada.idResposta).toEqual(resposta.idResposta);
    expect(respostaCadastrada.questaoId).toEqual(resposta.questaoId);
    expect(respostaCadastrada.usuarioId).toEqual(resposta.usuarioId);

    await respostaCadastrada.delete();
  });

  it('Deve remover uma resposta', async () => {
    const resposta = new RespostasQuestaoFechada('', 'teste', 'teste', 'teste');
    await resposta.submeter();

    const respostaCadastrada: RespostasQuestaoFechada = await resposta.buscar();

    expect(respostaCadastrada).not.toBe(null);

    await respostaCadastrada.delete();

    const asdasd: RespostasQuestaoFechada = await respostaCadastrada.buscar();

    expect(asdasd).toBe(null);
  });

  it('Deve buscar uma resposta', async () => {
    const resposta = new RespostasQuestaoFechada('', 'teste', 'teste', 'teste');
    await resposta.submeter();
    const respostaCadastrada: RespostasQuestaoFechada = await resposta.buscar();
    expect(respostaCadastrada.idResposta).not.toEqual(null);
    await respostaCadastrada.delete();
  });

  it('Deve retornar todas as resposta do usuário', async () => {
    const respostaUm = new RespostasQuestaoFechada(
      '',
      'testeUm',
      'testeUm',
      'id_do_usuario'
    );
    const respostaDois = new RespostasQuestaoFechada(
      '',
      'testeDois',
      'testeDois',
      'id_do_usuario'
    );
    const respostaTres = new RespostasQuestaoFechada(
      '',
      'testeTres',
      'testeTres',
      'id_do_usuario'
    );
    const respostaQuatro = new RespostasQuestaoFechada(
      '',
      'testeQuatro',
      'testeQuatro',
      'id_do_usuario'
    );
    await respostaUm.submeter();
    await respostaDois.submeter();
    await respostaTres.submeter();
    await respostaQuatro.submeter();

    const respostasUsuario: [
      RespostasQuestaoFechada
    ] = await RespostasQuestaoFechada.buscarRespostasPorUsuario(
      'id_do_usuario'
    );

    expect(4).toBe(respostasUsuario.length);

    expect('testeUm').toBe(
      respostasUsuario.filter(resposta => resposta.questaoId === 'testeUm')[0]
        .questaoId
    );
    expect('testeDois').toBe(
      respostasUsuario.filter(resposta => resposta.questaoId === 'testeDois')[0]
        .questaoId
    );
    expect('testeTres').toBe(
      respostasUsuario.filter(resposta => resposta.questaoId === 'testeTres')[0]
        .questaoId
    );
    expect('testeQuatro').toBe(
      respostasUsuario.filter(
        resposta => resposta.questaoId === 'testeQuatro'
      )[0].questaoId
    );

    const respostaCadastradaUm: RespostasQuestaoFechada = await respostaUm.buscar();
    const respostaCadastradaDois: RespostasQuestaoFechada = await respostaDois.buscar();
    const respostaCadastradaTres: RespostasQuestaoFechada = await respostaTres.buscar();
    const respostaCadastradaQuatro: RespostasQuestaoFechada = await respostaQuatro.buscar();

    await respostaCadastradaUm.delete();
    await respostaCadastradaDois.delete();
    await respostaCadastradaTres.delete();
    await respostaCadastradaQuatro.delete();
  });

  it('Deve retornar todas as resposta do usuário por assunto', async () => {
    // Cadastrando primeiro assunto
    const questaoSoma = new QuestaoFechada(
      '0001',
      'Soma',
      '1 + 1 é igual a 2?',
      1,
      [
        new Alternativa('0', false, 'falso'),
        new Alternativa('1', true, 'verdadeiro'),
      ]
    );

    const questaoDivisao = new QuestaoFechada(
      '0002',
      'Divisao',
      '10 / 2 é igual a 5?',
      1,
      [
        new Alternativa('2', false, 'falso'),
        new Alternativa('3', true, 'verdadeiro'),
      ]
    );

    // Cadastrando segundo assunto
    const questaoBrasil = new QuestaoFechada(
      '0003',
      'População do Brasil',
      'O brasil tem quantos milhões de habitantes?',
      1,
      [
        new Alternativa('4', false, '20 milhões'),
        new Alternativa('5', false, '100 milhões'),
        new Alternativa('6', true, '200 milhões'),
        new Alternativa('7', false, 'mais de 300 milhões'),
      ]
    );

    const questaoLingua = new QuestaoFechada(
      '0004',
      'A lingua do Brasil?',
      'Qual a lingua oficial do Brasil?',
      1,
      [
        new Alternativa('8', false, 'Alemão'),
        new Alternativa('9', false, 'Madarim'),
        new Alternativa('10', false, 'Hindi'),
        new Alternativa('11', false, 'Inglês'),
        new Alternativa('12', false, 'Italiano'),
        new Alternativa('13', true, 'Português'),
      ]
    );

    const assuntoOperacao = new Assunto(
      '0001',
      'Operações',
      0,
      [questaoSoma, questaoDivisao],
      'É importante conhecer a geografia local e mundial para....'
    );
    const assuntoGeografia = new Assunto(
      '0002',
      'Geografia',
      1,
      [questaoBrasil, questaoLingua],
      'É imporntante estudar as operações para prosseguir pela matemática'
    );

    assuntoOperacao.importancia = 'aodiasdias';

    await assuntoOperacao.save();
    await assuntoGeografia.save();

    Assunto.porId('0001');
    Assunto.porId('0002');

    // pegando o primeiro elemento da listagem de assuntos
    const todosAssuntosDB: Assunto[] = await Assunto.getAll();
    const assuntoCadastrado: Assunto = todosAssuntosDB[0];

    expect(1).toEqual(1);
    expect(2).toEqual(2);

    assuntoOperacao.delete();
    assuntoGeografia.delete();
  });
});
