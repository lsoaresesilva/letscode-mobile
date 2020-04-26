export function getAllSubject() {
  return {
    type: '@subject/GET_ALL_SUBJECT',
  };
}

export function getAllSUbjectSuccess(subjects) {
  return {
    type: '@subject/GET_ALL_SUBJECT_SUCCESS',
    payload: { subjects },
  };
}

export function getAllSUbjectFailure() {
  return {
    type: '@subject/GET_ALL_SUBJECT_FAILURE',
  };
}

export function quantidadeQuestoes() {
  return {
    ttype: '@assunto/QUANTIDADE_QUESTOES',
  };
}
