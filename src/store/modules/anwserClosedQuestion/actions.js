export function getAllAnwserQuestion() {
  return {
    type: '@anwser-closed-question/GET_ALL',
  };
}

export function getAllAnwserQuestionSuccess(payload) {
  return {
    type: '@anwser-closed-question/GET_ALL_SUCCESS',
    payload,
  };
}

export function getAllAnwserQuestionFailure() {
  return {
    type: '@anwser-closed-question/GET_ALL_FAILURE',
  };
}

export function addAnwserQuestion(alternativaId, questaoId, usuarioId) {
  return {
    type: '@anwser-closed-question/ADD',
    payload: {
      alternativaId,
      questaoId,
      usuarioId,
    },
  };
}

export function addAnwserQuestionSuccess(payload) {
  return {
    type: '@anwser-closed-question/ADD_SUCCESS',
    payload,
  };
}

export function addAnwserQuestionFailure() {
  return {
    type: '@anwser-closed-question/ADD_FAILURE',
  };
}
