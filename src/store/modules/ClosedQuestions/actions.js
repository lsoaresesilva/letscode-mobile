export function getClosedQUestions(idAssunto: string) {
  console.tron.log('getClosedQUestions action');
  return {
    type: '@closed_questions/GET_ALL',
    payload: idAssunto,
  };
}

export function getAllSUbjectSuccess(subjects) {
  return {
    type: '@closed_questions/GET_ALL_SUCCESS',
    payload: { subjects },
  };
}

export function getAllSUbjectFailure() {
  return {
    type: '@closed_questions/GET_ALL_FAILURE',
  };
}
