export function getClosedQuestions(idAssunto: string) {
  console.tron.log('getClosedQUestions action');
  return {
    type: '@closed_questions/GET_ALL',
    payload: idAssunto,
  };
}

export function getClosedQuestionsSuccess(subjects) {
  return {
    type: '@closed_questions/GET_ALL_SUCCESS',
    payload: { subjects },
  };
}

export function getClosedQuestionsFailure() {
  return {
    type: '@closed_questions/GET_ALL_FAILURE',
  };
}
