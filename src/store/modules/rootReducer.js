import { combineReducers } from 'redux';

import user from './user/reducer';
import auth from './auth/reducer';
import subject from './subject/reducer';
import anwserClosedQuestion from './anwserClosedQuestion/reducer';

export default combineReducers({
  user,
  auth,
  subject,
  anwserClosedQuestion,
});
