/* eslint-disable camelcase */
/* eslint-disable no-undef */
import QuestaoFechada from '../../src/model/QuestaoFechada';
import Alternativa from '../../src/model/Alternativa';
import Assunto from '../../src/model/Assunto';
import RespostasQuestaoFechada from '../../src/model/RespostasQuestaoFechada';

jest.setTimeout(30000);
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

  it('Deve buscar um assunto pelo ID', async () => {
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
    const assunto = new Assunto('0001', 'Teste', 0, [questaoFechada]);

    await assunto.save();
    const assuntoBuscadoBD: Assunto[] = await Assunto.porId('0001');
    assunto.delete();

    // expect(assuntoBuscadoBD.sequencia).toEqual(assunto.sequencia);
    expect(assuntoBuscadoBD.id).toEqual(assunto.id);
    expect(assuntoBuscadoBD.nome).toEqual(assunto.nome);
  });

  it('Deve carregar um assunto com questões (em cada questão com alternativas)', async () => {
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
    const assunto = new Assunto('0001', 'Teste', 0, [questaoFechada]);

    await assunto.save();

    // pegando o primeiro elemento da listagem de assuntos
    const assuntoBuscadoBD: Assunto[] = await Assunto.porId('0001');
    assunto.delete();

    expect(assuntoBuscadoBD.questoesFechadas.length).toEqual(1);
    expect(assuntoBuscadoBD.questoesFechadas[0].alternativas.length).toEqual(2);
  });

  it('Deve informar quantas questões tem em um assunto', async () => {
    const questaoFechada1 = new QuestaoFechada(
      '0001',
      'sinal de comparação',
      '1 == true é igual a true?',
      1,
      null
    );

    const questaoFechada2 = new QuestaoFechada(
      '0001',
      'sinal de comparação',
      '1 == true é igual a true?',
      1,
      null
    );

    const questaoFechada3 = new QuestaoFechada(
      '0001',
      'sinal de comparação',
      '1 == true é igual a true?',
      1,
      null
    );

    const assunto = new Assunto('0001', 'Teste', 0, [
      questaoFechada1,
      questaoFechada2,
      questaoFechada3,
    ]);

    expect(assunto.quantidadeQuestoesFechadas()).toEqual(
      assunto.questoesFechadas.length
    );
  });

  it('Deve buscar um assunto pelo id', async () => {
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
    const assunto = new Assunto('0001', 'Teste', 0, [questaoFechada]);

    await assunto.save();

    // pegando o primeiro elemento da listagem de assuntos
    const assuntoBD: Assunto = await Assunto.porId(assunto.id);
    // const assuntoCadastrado: Assunto = assuntoBD[0];
    assunto.delete();
    expect(assuntoBD.id).toEqual(assunto.id);
    expect(assuntoBD.nome).toEqual(assunto.nome);
  });

  it('Deve informar a quantidade de questões respondidas em um assunto', async () => {
    const idUsuario = 'idUsuario';

    const idAssuntoUm = 'ASSUNTO_UM_ID';
    const idAssuntoDois = 'ASSUNTO_DOIS_ID';

    // Questoes do assunto um
    const idQuestaoUm_a1 = 'idQuestaoUm_a1';
    const idQuestaoDois_a1 = 'idQuestaoDois_a1';
    const idQuestaoTres_a1 = 'idQuestaoTres_a1';
    const idQuestaoQuatro_a1 = 'idQuestaoQuatro_a1';

    // Questoes do assunto dois
    const idQuestaoUm_a2 = 'idQuestaoUm_a2';

    const assuntoUm = new Assunto(idAssuntoUm, 'Teste', 0, [
      new QuestaoFechada(idQuestaoUm_a1, 'Soma 1', '1 + 1 = 2', 1, [
        new Alternativa('0', false, 'Errado'),
        new Alternativa('1', true, 'Correto'),
      ]),
      new QuestaoFechada(idQuestaoDois_a1, 'Soma 2', '10 + 15 = 25', 1, [
        new Alternativa('2', false, 'Errado'),
        new Alternativa('3', true, 'Correto'),
      ]),
      new QuestaoFechada(idQuestaoTres_a1, 'Soma 3', '19 + 19 = 30', 1, [
        new Alternativa('4', false, 'Correto'),
        new Alternativa('5', true, 'Errado'),
      ]),
      new QuestaoFechada(idQuestaoQuatro_a1, 'Soma 4', '150 + 100 = 250', 1, [
        new Alternativa('6', false, 'Errado'),
        new Alternativa('7', true, 'Correto'),
      ]),
    ]);

    const assuntoDois = new Assunto(idAssuntoDois, 'Teste2', 0, [
      new QuestaoFechada(
        idQuestaoUm_a2,
        'sinal de comparação',
        '1 == true é igual a true?',
        1,
        [
          new Alternativa('0', false, 'falso'),
          new Alternativa('1', true, 'verdadeiro'),
        ]
      ),
    ]);

    await assuntoUm.save();
    await assuntoDois.save();

    const respostaUm = new RespostasQuestaoFechada(
      '011',
      '0',
      idQuestaoUm_a1,
      idUsuario
    );
    const respostaDois = new RespostasQuestaoFechada(
      '022',
      '1',
      idQuestaoUm_a2,
      idUsuario
    );
    const respostaTres = new RespostasQuestaoFechada(
      '033',
      '0',
      idQuestaoDois_a1,
      idUsuario
    );
    await respostaUm.submeter();
    await respostaDois.submeter();
    await respostaTres.submeter();

    const respostaCadastradaUm: RespostasQuestaoFechada = await respostaUm.buscar();
    const respostaCadastradaDois: RespostasQuestaoFechada = await respostaDois.buscar();
    const respostaCadastradaTres: RespostasQuestaoFechada = await respostaTres.buscar();

    const quantidadeQuestoesRespondidas = await Assunto.quantidadeQuestoesRespondidas(
      idUsuario,
      idAssuntoUm
    );

    await respostaCadastradaUm.delete();
    await respostaCadastradaDois.delete();
    await respostaCadastradaTres.delete();

    expect(quantidadeQuestoesRespondidas).toEqual(2);
  });

  it('deve informar a porcentagem de questões respondidas em um assunto', async () => {
    const idUsuario = 'idUsuario';

    const idAssuntoUm = 'ASSUNTO_UM_ID';
    const idAssuntoDois = 'ASSUNTO_DOIS_ID';

    // Questoes do assunto um
    const idQuestaoUm_a1 = 'idQuestaoUm_a1';
    const idQuestaoDois_a1 = 'idQuestaoDois_a1';
    const idQuestaoTres_a1 = 'idQuestaoTres_a1';
    const idQuestaoQuatro_a1 = 'idQuestaoQuatro_a1';

    // Questoes do assunto dois
    const idQuestaoUm_a2 = 'idQuestaoUm_a2';

    const assuntoUm = new Assunto(idAssuntoUm, 'Teste', 0, [
      new QuestaoFechada(idQuestaoUm_a1, 'Soma 1', '1 + 1 = 2', 1, [
        new Alternativa('0', false, 'Errado'),
        new Alternativa('1', true, 'Correto'),
      ]),
      new QuestaoFechada(idQuestaoDois_a1, 'Soma 2', '10 + 15 = 25', 1, [
        new Alternativa('2', false, 'Errado'),
        new Alternativa('3', true, 'Correto'),
      ]),
      new QuestaoFechada(idQuestaoTres_a1, 'Soma 3', '19 + 19 = 30', 1, [
        new Alternativa('4', false, 'Correto'),
        new Alternativa('5', true, 'Errado'),
      ]),
      new QuestaoFechada(idQuestaoQuatro_a1, 'Soma 4', '150 + 100 = 250', 1, [
        new Alternativa('6', false, 'Errado'),
        new Alternativa('7', true, 'Correto'),
      ]),
    ]);

    const assuntoDois = new Assunto(idAssuntoDois, 'Teste2', 0, [
      new QuestaoFechada(
        idQuestaoUm_a2,
        'sinal de comparação',
        '1 == true é igual a true?',
        1,
        [
          new Alternativa('0', false, 'falso'),
          new Alternativa('1', true, 'verdadeiro'),
        ]
      ),
    ]);

    await assuntoUm.save();
    await assuntoDois.save();

    const respostaUm = new RespostasQuestaoFechada(
      '011',
      '0',
      idQuestaoUm_a1,
      idUsuario
    );
    const respostaDois = new RespostasQuestaoFechada(
      '022',
      '1',
      idQuestaoUm_a2,
      idUsuario
    );
    const respostaTres = new RespostasQuestaoFechada(
      '033',
      '0',
      idQuestaoDois_a1,
      idUsuario
    );
    await respostaUm.submeter();
    await respostaDois.submeter();
    await respostaTres.submeter();

    const respostaCadastradaUm: RespostasQuestaoFechada = await respostaUm.buscar();
    const respostaCadastradaDois: RespostasQuestaoFechada = await respostaDois.buscar();
    const respostaCadastradaTres: RespostasQuestaoFechada = await respostaTres.buscar();

    // / const quantidadeQuestoesRespondidas = await Assunto.porcentagemQuestoesRespondidas(
    //   idUsuario,
    //   idAssuntoUm
    // );
    // await assuntoUm.calcularPorcentagemQuestaoRespondida(idUsuario);
    await assuntoUm.calcularPorcentagemQuestaoRespondida(
      idUsuario,
      idAssuntoUm
    );
    console.log(
      '_______________\n-------\n____________\n----------\n____________\n---------------\n__________________\n-------------',
      assuntoUm.questoesFechadas[0].respostaQuestao
    );
    // console.log(
    //  '\n\n\n\n __________ ',
    //  assuntoUm.porcentagemQuestoesRespondidas
    // /);
    // await assuntoUm.calcularPorcentagemQuestaoRespondida(idUsuario);
    // console.log(
    //  '\n\n\n\n\n >>>>>>> ',
    //  assuntoUm.porcentagemQuestoesRespondidas
    // );
    // assuntoUm.porcentagemQuestoesRespondidas = quantidadeQuestoesRespondidas;

    expect(assuntoUm.porcentagemQuestoesRespondidas).toEqual(50);
    // expect(assuntoUm.questoesFechadas[0].respostaQuestao).toEqual(
    //  idQuestaoUm_a1
    // );
    await respostaCadastradaUm.delete();
    await respostaCadastradaDois.delete();
    await respostaCadastradaTres.delete();
  });
});
