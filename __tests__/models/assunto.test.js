/* eslint-disable no-undef */
import QuestaoFechada from '../../src/model/QuestaoFechada';
import Alternativa from '../../src/model/Alternativa';
import Assunto from '../../src/model/Assunto';

describe('Testes de Assunto', () => {
  it('Deve ordenar os assuntos pela sequencia', async () => {
    const assuntoA = new Assunto(null, 'A', 1, null);
    const assuntoB = new Assunto(null, 'B', 4, null);
    const assuntoC = new Assunto(null, 'C', 3, null);
    const assuntoD = new Assunto(null, 'D', 2, null);

    const assuntos = [assuntoA, assuntoB, assuntoC, assuntoD];

    const assuntosOrdenado = Assunto.ordenarPorSequencia(assuntos);

    expect(assuntosOrdenado[0].sequencia).toEqual(1);
    expect(assuntosOrdenado[1].sequencia).toEqual(2);
    expect(assuntosOrdenado[2].sequencia).toEqual(3);
    expect(assuntosOrdenado[3].sequencia).toEqual(4);
  });

  it('Deve carregar um assunto com sequencia, id e nome', async () => {
    const alternativas = [
      new Alternativa('0', false, 'falso'),
      new Alternativa('1', true, 'verdadeiro'),
    ];
    const questaoFechada = new QuestaoFechada(
      '0001',
      'sinal de comparação',
      '1 == true é igual a true?',
      1,
      alternativas
    );
    const assunto = new Assunto('0001', 'Teste', 0, questaoFechada);

    await assunto.save();

    // pegando o primeiro elemento da listagem de assuntos
    const todosAssuntosDB: Assunto[] = await Assunto.getAll();
    const assuntoCadastrado: Assunto = todosAssuntosDB[0];
    assunto.delete();

    expect(assuntoCadastrado.sequencia).toEqual(assunto.sequencia);
    expect(assuntoCadastrado.id).toEqual(assunto.id);
    expect(assuntoCadastrado.nome).toEqual(assunto.nome);
  });

  it('Deve informar quantas questões tem em um assunto', async () => {
    const alternativas = [
      new Alternativa('0', false, 'falso'),
      new Alternativa('1', true, 'verdadeiro'),
    ];
    const questaoFechada = new QuestaoFechada(
      '0001',
      'sinal de comparação',
      '1 == true é igual a true?',
      1,
      alternativas
    );
    const assunto = new Assunto('0001', 'Teste', 0, questaoFechada);

    await assunto.save();

    // pegando o primeiro elemento da listagem de assuntos
    const todosAssuntosDB: Assunto[] = await Assunto.getAll();
    const assuntoCadastrado: Assunto = todosAssuntosDB[0];
    assunto.delete();

    expect(Assunto.quantidadeQuestoesFechadas(assuntoCadastrado)).toEqual(0);
  });
});
