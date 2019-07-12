/*
 * Quiz Reducer
 *
 * Fetch Question
 * Sets in state,
 *
 */
import { fromJS } from 'immutable';
import {FETCH_QUESTIONS,FETCH_QUESTIONS_SUCCESS,FETCH_QUESTIONS_ERROR,SET_CURRENT_INDEX,SET_SCORE} from './constants'

export const initialState = fromJS({
  isFetching: false,
  error: null,
  questions: null,
  currentIndex:0,
  score:0,
});

function quizReducer(state = initialState, {type,data,error,index,score}) {
  switch(type){
    case FETCH_QUESTIONS:
      return state.set('isFetching',true);
    case FETCH_QUESTIONS_SUCCESS:
      return state.set('isFetching',false).set('questions',data.results);
    case FETCH_QUESTIONS_ERROR:
        return state.set('isFetching',false).set('error',error);
    case SET_CURRENT_INDEX:
        return state.set('currentIndex',index);
    case SET_SCORE:
        return state.set('score',score)
    default:
      return state;
  }
}

export default quizReducer;
