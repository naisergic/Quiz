import {FETCH_QUESTIONS,FETCH_QUESTIONS_SUCCESS,FETCH_QUESTIONS_ERROR,SET_CURRENT_INDEX,SET_SCORE} from './constants'

export const fetchQuestions=()=>{
  return{
    type: FETCH_QUESTIONS,
  }
}

export const fetchQuestionsSuccess=(data)=>{
  return{
    type: FETCH_QUESTIONS_SUCCESS,
    data
  }
}

export const fetchQuestionsError=(error)=>{
  return{
    type: FETCH_QUESTIONS_ERROR,
    error
  }
}

export const setCurrentIndex=(index)=>{
  return{
    type: SET_CURRENT_INDEX,
    index
  }
}

export const setScore=(score)=>{
  return{
    type: SET_SCORE,
    score
  }
}
