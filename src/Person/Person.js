import React from 'react';
//import './Person.css';
import styled from 'styled-components';
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 2px solid #6fcc19;
    box-shadow: 0 2px 3px #eb2edb;
    padding: 16px;
    text-align: center;

    @media(min-width : 500px){
        width: 450px;
} 
`

const person = (props) => {
    return (
      <StyledDiv>
        <p onClick={props.click}>
          i am from Person {props.name} and {props.age}
        </p>
        <h2>{props.children}</h2>
        <input type="text" onChange={props.changed} value={props.name} />
      </StyledDiv>
    );
}
export default person;