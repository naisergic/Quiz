import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Result from '../../components/Result/Result';
import {makeSelectScore,makeSelectToalQuestion} from '../Quiz/selectors';

export const mapStateToProps = ()=>{
  return createStructuredSelector({
    finalScore:makeSelectScore(),
    totalquestion:makeSelectToalQuestion(),
  });
}

export default connect(mapStateToProps)(Result)
