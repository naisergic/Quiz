import React from 'react';
import qs from 'qs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter,Redirect } from 'react-router';
import InjectReducer  from 'utils/injectReducer';
import InjectSaga  from 'utils/injectSaga';
import QuizComponent from '../../components/Quiz/Quiz';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import {fetchQuestions,setCurrentIndex,setScore} from './actions';
import {makeSelectCurrentQuestion,makeSelectFetching,makeSelectError,makeSelectIndex,makeSelectCorrectAnswer,makeSelectScore,makeSelectToalQuestion} from './selectors'
import saga from './sagas';
import reducer from './reducer';
import {QUIZ_STATE_KEY} from './constants';

export class Quiz extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      selectedValue: '',
      isCorrectAns: false,
      disabled: false,
      redirect: false,
      isAnsSelected:true,
    }
    this.createInitialState();
    this.handleRadioClicked = this.handleRadioClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handleRadioClicked(e){
    const value = e.target.value;
    this.setState({
      selectedValue: value,
      isAnsSelected: true,
    })
  }
  handleSubmit(){
    let {currentScore} = this.props;
    if(!this.state.selectedValue){
      this.setState({
        isAnsSelected:false,
      });
      return -1;
    }
    if(this.state.selectedValue === this.props.correctAnswer){
      this.setState({isCorrectAns:true,isAnsSelected:true});
      this.props.setNewScore(++currentScore);
    }
    this.setState({disabled:true});
  }
  handleNext(){
    let{currentIndex,totalquestion} = this.props;
    this.setState({disabled:false,selectedValue:''});
    if(++currentIndex === totalquestion){
      this.setState({redirect:true})
    }
    else{
      this.props.setIndex(currentIndex)
    }

  }
  createInitialState(){
    let questionNumber = 0;
    const {search} = this.props.location;
    const query = qs.parse(search, { ignoreQueryPrefix: true });
    if(query && query.index && query.index!==questionNumber){
      questionNumber = query.index;
      this.props.setIndex(questionNumber)
    }
  }
  componentDidMount(){
    this.props.getQuestions();
  }
  render(){
    const {currentQuestion,isFetching} = this.props;
    if(this.state.redirect){
      return(
        <Redirect to="/result"/>
      )
    }
    if(isFetching){
      return(
        <LoadingIndicator />
      )
    }
    return(
      <div>
        <QuizComponent question={currentQuestion} handleRadioClicked={this.handleRadioClicked} selectedValue={this.state.selectedValue} isCorrectAns={this.state.isCorrectAns} disabled={this.state.disabled} handleSubmit={this.handleSubmit} handleNext={this.handleNext} isAnsSelected={this.state.isAnsSelected}/>
      </div>
    )
  }
}
export const mapStateToProps = ()=>{
  return createStructuredSelector({
    currentQuestion: makeSelectCurrentQuestion(),
    isFetching: makeSelectFetching(),
    error: makeSelectError(),
    currentIndex: makeSelectIndex(),
    correctAnswer:makeSelectCorrectAnswer(),
    currentScore:makeSelectScore(),
    totalquestion:makeSelectToalQuestion(),
  });
}

const mapDispatchToProps = dispatch => ({
  getQuestions() {
    dispatch(fetchQuestions());
  },
  setIndex(index) {
    dispatch(setCurrentIndex(index))
  },
  setNewScore(score){
    dispatch(setScore(score))
  }
});
const withSaga = InjectSaga({key:QUIZ_STATE_KEY,saga});
const withReducer = InjectReducer({key:QUIZ_STATE_KEY,reducer});
const withConnect = connect(mapStateToProps,mapDispatchToProps);

export default withRouter(compose(withReducer,withSaga,withConnect)(Quiz));
