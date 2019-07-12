import React from 'react';

const RadioButton = (props)=>{
  return(
    <label>
        <input type="radio" value={props.label} checked={props.checked} {...props}/>
          {props.value}
    </label>
  )
}

export default RadioButton;
