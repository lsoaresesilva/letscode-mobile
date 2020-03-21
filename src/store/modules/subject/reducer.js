import produce from 'immer';

export const INITIAL_STATE = {
  subjects: [],
  loading: false,
  failed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subject/GET_ALL_SUBJECT': {
        draft.loading = true;
        draft.failed = false;
        break;
      }
      case '@subject/GET_ALL_SUBJECT_SUCCESS': {
        draft.subjects = action.payload;
        draft.loading = false;
        draft.failed = false;
        break;
      }
      case '@subject/GET_ALL_SUBJECT_FAILURE': {
        draft.loading = false;
        draft.failed = true;
        break;
      }
      default:
    }
  });
}
