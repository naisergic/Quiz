import React from 'react';
import memoizeOne from 'memoize-one';
import Link from '../common/Link/Link';
const Result=(props)=>{
  const msg = `your toal score is ${props.finalScore} out of ${props.totalquestion}`
  return(
    <div>
      <div><span>{msg}</span></div>
      <div>
        <Link to="/quiz"> Play again</Link>
      </div>
    </div>
  )
}

export default memoizeOne(Result);
