import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className = 'Person'>
        <p onClick = {props.click}>i am from Person {props.name} and {props.age}</p>
        <h2>{props.children}</h2>
        <input type = "text" onChange = {props.changed} value = {props.name} />
        </div>
    )
}
export default person;