import produce from 'immer';

export const INITIAL_STATE = {
  questions: [],
  loading: false,
  failed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@anwser-closed-question/GET_ALL': {
        draft.loading = true;
        draft.failed = false;
        break;
      }
      case '@anwser-closed-question/GET_ALL_SUCCESS': {
        draft.questions = action.payload;
        draft.loading = false;
        draft.failed = false;
        break;
      }
      case '@anwser-closed-question/GET_ALL_FAILURE': {
        draft.loading = false;
        draft.failed = true;
        break;
      }
      case '@anwser-closed-question/ADD': {
        draft.loading = true;
        draft.failed = false;
        break;
      }
      case '@anwser-closed-question/ADD_SUCCESS': {
        draft.questions.push(action.payload);
        draft.loading = false;
        draft.failed = false;
        break;
      }
      case '@anwser-closed-question/ADD_FAILURE': {
        draft.loading = false;
        draft.failed = true;
        break;
      }
      default:
    }
  });
}
