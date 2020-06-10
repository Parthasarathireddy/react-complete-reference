import React from 'react';

const person = (props) => {
    return (
        <div>
        <p>i am from Person {props.name} and {props.age}</p>
        <h2>{props.children}</h2>
        </div>
    )
}
export default person;