/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AnwserClosedQuestionService } from '../../../services/AnwserClosedQuestion';
import RespostasQuestaoFechada from '../../../model/RespostasQuestaoFechada';

import {
  getAllAnwserQuestionFailure,
  getAllAnwserQuestionSuccess,
  addAnwserQuestionSuccess,
  addAnwserQuestionFailure,
} from './actions';

export function* getAllAnwser() {
  try {
    const service = new AnwserClosedQuestionService();
    const anwsers = yield call(service.getAllAnwserClosedQuestions);
    yield put(getAllAnwserQuestionSuccess(anwsers));
  } catch (error) {
    console.tron.log('error', error);
    Alert.alert('Falha na requisição de assuntos');
    yield put(getAllAnwserQuestionFailure());
  }
}

export function* addAnwser(alternativa: RespostasQuestaoFechada) {
  console.tron.log('saga', alternativa);
  try {
    const service = new AnwserClosedQuestionService();
    const anwsers = yield call(
      service.addAnwserClosedQuestion,
      alternativa.payload
    );
    yield put(addAnwserQuestionSuccess(anwsers));
  } catch (error) {
    console.tron.log('error', error);
    Alert.alert('Falha na requisição de assuntos');
    yield put(addAnwserQuestionFailure());
  }
}

export default all([
  takeLatest('@anwser-closed-question/GET_ALL', getAllAnwser),
  takeLatest('@anwser-closed-question/ADD', addAnwser),
]);
