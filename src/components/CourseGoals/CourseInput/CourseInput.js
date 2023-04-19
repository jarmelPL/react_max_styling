import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value!='') {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim()=='') {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    event.target.firstElementChild.lastElementChild.value=''
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}` }>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

// stylowanie, wersja dwa, inline:
/* <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
<input type="text" onChange={goalInputChangeHandler} style={{backgroundColor: !isValid ? 'salmon' : 'white'}}/> */

export default CourseInput;
