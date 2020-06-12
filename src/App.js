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
    ],
    showPersons : false
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
  toggleChangeHandler = ()=>{
    const DoesShow = this.state.showPersons;
    this.setState({showPersons : !DoesShow})
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
          <button style = {inlineStyle} onClick= {this.toggleChangeHandler}>Click Me!</button>
          {this.state.showPersons ? 
          <div>
            <Person name = { this.state.persons[0].name} and age = { this.state.persons[0].age} click = {this.switchNameHandler.bind(this,'paragraph')}/>
            <Person name = { this.state.persons[1].name} changed = {this.nameChangedHandler} and age = { this.state.persons[1].age}>My hobbies are Coding</Person>
            <Person name = { this.state.persons[2].name} and age = { this.state.persons[2].age}/>
          </div> : null } 
      </div>
    );
  }
}

export default App;
