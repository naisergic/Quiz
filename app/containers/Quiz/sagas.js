/**
 * Gets Questions for Quiz
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { FETCH_QUESTIONS } from './constants';
import {fetchQuestionsSuccess, fetchQuestionsError} from './actions'
/**
 * Gets Questions for Quiz
 */
export function* getQuestions() {

  const requestURL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    if(Array.isArray(result.results) && result.results.length){
      return yield put(fetchQuestionsSuccess(result));
    }
    return yield put(fetchQuestionsError('SomeThing Went wrong'));
  } catch (err) {
    return yield put(fetchQuestionsError(err));
  }
}

export function* fetchQuizQuestions() {
  yield takeLatest(FETCH_QUESTIONS, getQuestions);
}

export default [fetchQuizQuestions];
