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

const enviarResposta = (alternativaId, questaoId, usuarioId) => {
  return new Promise((resolve, reject) => {
    try {
      const respostaTres = new RespostasQuestaoFechada(
        '',
        alternativaId,
        questaoId,
        usuarioId
      );
      respostaTres.submeter();
    } catch (error) {
      reject(error);
    }
  });
};

export function* addAnwser(alternativa) {
  try {
    console.tron.log('____________', alternativa);
    const alternativeRespondiade = yield call(
      enviarResposta,
      alternativa.payload.alternativaId,
      alternativa.payload.questaoId,
      alternativa.payload.usuarioId
    );
    yield put(addAnwserQuestionSuccess(alternativeRespondiade));
  } catch (error) {
    Alert.alert('Falha na requisição de assuntos');
    yield put(addAnwserQuestionFailure());
  }
}

export default all([
  takeLatest('@anwser-closed-question/GET_ALL', getAllAnwser),
  takeLatest('@anwser-closed-question/ADD', addAnwser),
]);
