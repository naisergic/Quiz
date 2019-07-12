import { createSelector } from 'reselect';
import {Map} from 'immutable';
import {QUIZ_STATE_KEY} from './constants';

const selectQuiz = (state) => {
  if(state){
    return state[QUIZ_STATE_KEY];
  }
  return Map({});
}

export const makeSelectCurrentQuestion = ()=>{
  return createSelector(selectQuiz,makeSelectIndex(),(currentQuestion,currentIndex)=>{
    const questions = currentQuestion.get('questions');
    let question;
    if(questions){
      question = questions[currentIndex].question;
    }
    return question;
  })
}

export const makeSelectCorrectAnswer = ()=>{
  return createSelector(selectQuiz,makeSelectIndex(),(currentQuestion,currentIndex)=>{
    const questions = currentQuestion.get('questions');
    let correct_answer;
    if(questions){
      correct_answer = questions[currentIndex].correct_answer;
    }
    return correct_answer;
  })
}

export const makeSelectFetching = ()=>{
  return createSelector(selectQuiz,isFetching=>{
    return isFetching.get('isFetching',false);
  })
}


export const makeSelectError = ()=>{
  return createSelector(selectQuiz,error=>{
    return error.get('error');
  })
}

export const makeSelectIndex = ()=>{
  return createSelector(selectQuiz,index=>{
    return index.get('currentIndex');
  })
}

export const makeSelectScore = ()=>{
  return createSelector(selectQuiz,score=>{
    return score.get('score');
  })
}

export const makeSelectToalQuestion=()=>{
  return createSelector(selectQuiz,questions=>{
    const result =  questions.get('questions');
    if(result && result.length){
      return result.length;
    }
    return '';
  })
}
