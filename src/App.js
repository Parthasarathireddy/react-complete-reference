import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [currentState, updatedState] = useState({
    persons : [
      {
        name : "AAA",
        age : 28
      },
      {
        name : "BBB",
        age : 27
      },
      {
        name : "CCC",
        age : 26
      }
    ]
  });
  const [otherState,setOtherState] = useState({othervalue : 'Some other value'})
  const [onlySting, setOnlyString] = useState('If we need to pass only string values')
  console.log(currentState, otherState, onlySting);
 const switchNameHandler = ()=>{
  updatedState({
      persons : [
        {
          name : "AAAAAAAAAA",
          age : 28
        },
        {
          name : "BBBV",
          age : 27
        },
        {
          name : "DDDDD",
          age : 26
        }
      ]
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick = {switchNameHandler}>Click Me!</button>
          <Person name = { currentState.persons[0].name} and age = { currentState.persons[0].age}/>
          <Person name = { currentState.persons[1].name} and age = { currentState.persons[1].age}>My hobbies are Coding</Person>
          <Person name = { currentState.persons[2].name} and age = { currentState.persons[2].age}/>
        </header>
      </div>
    );
  }

export default App;