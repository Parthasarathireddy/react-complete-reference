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

  switchNameHandler = (newName)=>{
    this.setState({
      persons : [
        {
          name : newName,
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
  }
  nameChangedHandler = (event)=>{
    this.setState({
      persons : [
        {
          name : "AAA",
          age : 28
        },
        {
          name : event.target.value,
          age : 27
        },
        {
          name : "CCC",
          age : 26
        }
      ]
    })
  }
  render(){
    const inlineStyle = {
      backgroundColor : '#eb2edb',
      color : 'yellow',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button style = {inlineStyle} onClick= {() => this.switchNameHandler('Not Recomanded')}>Click Me!</button>
          <Person name = { this.state.persons[0].name} and age = { this.state.persons[0].age} click = {this.switchNameHandler.bind(this,'paragraph')}/>
          <Person name = { this.state.persons[1].name} changed = {this.nameChangedHandler} and age = { this.state.persons[1].age}>My hobbies are Coding</Person>
          <Person name = { this.state.persons[2].name} and age = { this.state.persons[2].age}/>
        </header>
      </div>
    );
  }
}

export default App;
