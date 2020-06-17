import React from 'react';
import classes from './Person.css';

const person = (props) => {
  console.log(props);
    return (
      <div className = {classes.Person}>
        <p onClick={props.click}>
          i am from Person {props.name} and {props.age}
        </p>
        <h2>{props.children}</h2>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );
}
export default person;