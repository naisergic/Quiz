import React from  'React';
import memoizeOne from 'memoize-one';
import Link from '../common/Link/Link';
import CenteredDiv from './CenteredDiv';

const Welcome = ()=>{
  const welcomeMsg = "Thanks for coming, click on the below button to start Quiz"
  return(
    <React.Fragment>
      <CenteredDiv>
        <span>{welcomeMsg}</span>
      </CenteredDiv>
      <CenteredDiv>
        <Link to="/quiz"> Start Quiz</Link>
      </CenteredDiv>
    </React.Fragment>
  )
}

export default memoizeOne(Welcome);
