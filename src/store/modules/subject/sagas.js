/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { SubjectService } from '../../../services/subjectService';

import { getAllSUbjectFailure, getAllSUbjectSuccess } from './actions';

export function* getAllSubject() {
  try {
    const subjectService = new SubjectService();
    const subjects = yield call(subjectService.getAllSubjects);
    yield put(getAllSUbjectSuccess(subjects));
  } catch (error) {
    Alert.alert('Falha na requisição de assuntos');
    yield put(getAllSUbjectFailure());
  }
}

export default all([takeLatest('@subject/GET_ALL_SUBJECT', getAllSubject)]);
