/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { SubjectService } from '../../../services/subjectService';
import Assunto from '../../../model/Assunto';

import {
  getAllSUbjectFailure,
  getAllSUbjectSuccess,
  getQuantidadeQuestoes,
  getQuantidadeQuestoesFalhou,
  getQuantidadeQuestoesSucesso,
} from './actions';

const calcularPorcentagemQuestoesRespondidas = (
  items: [Assunto]
): Assunto[] => {
  return new Promise((resolve, reject) => {
    try {
      const fn = function asyncMultiplyBy2(assunto: Assunto) {
        return assunto.calcularPorcentagemQuestaoRespondida(
          'm4ScVJ7DxWwLgOH6ZFPi',
          assunto.id
        );
        // Assunto.porcentagemQuestoesRespondidas(
        //   'm4ScVJ7DxWwLgOH6ZFPi',
        //  assunto.id
        // );
      };

      const actions = items.map(fn);

      const results = Promise.all(actions);

      results.then(assunto => {
        resolve(
          items.map((item, index) => {
            return assunto[index];
          })
        );
      });
    } catch (error) {
      reject(error);
    }
  });
};

export function* getAllSubject() {
  try {
    const servico = new SubjectService();
    const assuntos: [Assunto] = yield call(servico.todosAssuntos);
    yield call(calcularPorcentagemQuestoesRespondidas, assuntos);
    yield put(getAllSUbjectSuccess(assuntos));
  } catch (error) {
    Alert.alert('Falha na requisição de assuntos');
    yield put(getAllSUbjectFailure());
  }
}

export function* quantidadeQuestoes(id) {
  try {
    const subjectService = new SubjectService();
    const assuntos = yield call(subjectService.todosAssuntos);
    const quantidade = assuntos.filter(item => item.id === id)[0].length;
    yield put(getQuantidadeQuestoesSucesso(quantidade));
  } catch (error) {
    Alert.alert('Falha na requisição de assuntos');
    yield put(getQuantidadeQuestoesFalhou());
  }
}

export default all([
  takeLatest('@subject/GET_ALL_SUBJECT', getAllSubject),
  takeLatest('@assunto/QUANTIDADE_QUESTOES', getQuantidadeQuestoes),
]);
