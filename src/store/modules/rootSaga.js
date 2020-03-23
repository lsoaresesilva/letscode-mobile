import { all } from 'redux-saga/effects';

import subject from './subject/sagas';
import auth from './auth/sagas';
import anwserClosedQuestion from './anwserClosedQuestion/sagas';

export default function* rootSaga() {
  return yield all([auth, subject, anwserClosedQuestion]);
}
