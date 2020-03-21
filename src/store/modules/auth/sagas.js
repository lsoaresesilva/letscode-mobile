/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import Usuario from '../../../model/Usuario';
import { AuthService } from '../../../services/authService';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const user = new Usuario('', '', email, password);
    const auth = new AuthService();
    const userSigned = yield call(auth.signIn, user);
    yield put(signInSuccess(userSigned));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifiique seus dados'
    );
    yield put(signFailure());
  }
}

// eslint-disable-next-line no-empty-function
export function* signUp() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
