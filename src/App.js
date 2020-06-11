import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
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
  }

  switchNameHandler = ()=>{
    this.setState({
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
          name : "DDD",
          age : 26
        }
      ]
    })
    console.log("switchNameHandler");
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick = {this.switchNameHandler}>Click Me!</button>
          <Person name = { this.state.persons[0].name} and age = { this.state.persons[0].age}/>
          <Person name = { this.state.persons[1].name} and age = { this.state.persons[1].age}>My hobbies are Coding</Person>
          <Person name = { this.state.persons[2].name} and age = { this.state.persons[2].age}/>
        </header>
      </div>
    );
  }
}

export default App;
