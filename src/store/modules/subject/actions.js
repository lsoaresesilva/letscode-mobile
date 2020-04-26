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

export function getQuantidadeQuestoes() {
  return {
    type: '@assunto/QUANTIDADE_QUESTOES',
  };
}

export function getQuantidadeQuestoesFalhou() {
  return {
    type: '@assunto/QUANTIDADE_QUESTOES',
  };
}

export function getQuantidadeQuestoesSucesso(quantidade) {
  return {
    type: '@assunto/QUANTIDADE_QUESTOES',
    payload: quantidade,
  };
}
