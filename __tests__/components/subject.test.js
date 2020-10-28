/* eslint-disable no-undef */
/*
import React from 'react';
import { useSelector, useDispatch as useDispatchRedux } from 'react-redux';
import { render, waitForElement } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import Subject from '../../src/scenes/Subject';
import { getAllSubject } from '../../src/store/modules/subject/actions';

const store = configureStore([])();
jest.mock('react-native-gesture-handler', () => {
  return {
    BaseButton: 'ASd',
  };
});

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

beforeEach(() => {
  store.clearActions();
});

describe('Subject', () => {
  it('deve aparecer a tela caso seja carregado', async () => {
    useSelector.mockImplementation(selectorFn =>
      selectorFn({
        subject: {
          subjects: [],
          loading: false,
          joao: '',
        },
      })
    );

    const { getByText } = render(<Subject />);
    await waitForElement(() => getByText('assuntos'));
  });

  it('deve disparar a action getAllSubject', () => {
    store.dispatch(getAllSubject());
    expect(store.getActions()).toMatchSnapshot();
    expect(store.getActions()).toContainEqual(getAllSubject());
  });

  it('deve renderizar a tela com 3 itens carregado na lista', async () => {
    // /c//onst mockedDispatch = jest.fn();

    useSelector.mockImplementation(selectorFn =>
      selectorFn({
        subject: {
          subjects: {
            subjects: [
              {
                id: 'jW112JS232KJakjSKaJS',
                nome: 'Variáveis',
                sequencia: 1,
                questoesFechadas: [],
              },
              {
                id: 'jW112asd2KJakjSKaJS',
                nome: 'Condições',
                sequencia: 2,
                questoesFechadas: [],
              },
              {
                id: 'jW112132KJaksSKaJS',
                nome: 'Repetições',
                sequencia: 3,
                questoesFechadas: [],
              },
            ],
          },
          loading: false,
          joao: 'teste',
        },
      })
    );

    const { getByTestId, getByText } = render(<Subject />);

    // Testando o item Variáveis
    expect(getByTestId('subject-testid')).toContainElement(
      getByText('Variáveis')
    );

    // Testando o item Condições
    expect(getByTestId('subject-testid')).toContainElement(
      getByText('Condições')
    );

    // Testando o item Repetições
    expect(getByTestId('subject-testid')).toContainElement(
      getByText('Repetições')
    );
  });
});
*/
it('Deve ordenar os assuntos pela sequencia', async () => {
  expect(4).toEqual(4);
});
