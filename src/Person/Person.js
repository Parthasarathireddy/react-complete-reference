import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media(min-width : 500px)' : {
            width : '450px'
        }
    }
    return (
        <div className = 'Person' style = {style}>
        <p onClick = {props.click}>i am from Person {props.name} and {props.age}</p>
        <h2>{props.children}</h2>
        <input type = "text" onChange = {props.changed} value = {props.name} />
        </div>
    )
}
export default Radium(person);