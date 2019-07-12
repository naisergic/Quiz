import React from 'react';
import memoizeOne from 'memoize-one';
import Button from '../common/Button';
import RadioButtons from '../common/RadioButton';

const DisplayMessage = ({msg})=>{
  return (
  <div>
    <span>{msg}</span>
  </div>
  );
}

export const Quiz = (props)=>{
  const {isCorrectAns,disabled,isAnsSelected} = props;
  const errorClass = !isCorrectAns && disabled?'error':''
  return(
    <React.Fragment>
      <div>
        <span dangerouslySetInnerHTML={{__html: props.question}}/>
      </div>
      <div>
        <div><RadioButtons id="radioTrue" className={errorClass} value={'True'} onChange={(e)=>{props.handleRadioClicked(e)}} checked={props.selectedValue==='True'} disabled = {disabled}/></div>
        <div><RadioButtons id="radioFalse" className={errorClass} value={'False'} onChange={(e)=>{props.handleRadioClicked(e)}} checked={props.selectedValue==='False'} disabled = {disabled}/></div>
      </div>
      {
        isCorrectAns &&  disabled && (
          <DisplayMessage msg={"Correct Answer"}/>
        )
      }
      {
        !isCorrectAns &&  disabled && (
          <DisplayMessage msg={"Wrong Answer"}/>
        )
      }
      {
        !isAnsSelected && (
          <DisplayMessage msg={"Please Select Any option"}/>
        )
      }
      <div className={"setDisplay"}>
        <Button onClick={props.handleSubmit}>Submit</Button>
        <Button onClick={props.handleNext}>Next</Button>
      </div>
    </React.Fragment>
  )
}
export default memoizeOne(Quiz);
