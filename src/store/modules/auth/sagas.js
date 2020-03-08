import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import User from '../../../model/User';
import { AuthService } from '../../../services/authService';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const user = new User(email, password);
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
