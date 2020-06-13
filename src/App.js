import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        name: "AAA",
        age: 28
      },
      {
        name: "BBB",
        age: 27
      },
      {
        name: "CCC",
        age: 26
      }
    ],
    showPersons: false
  }
  deletePersonHandler(personIndex){
    //const persons = this.state.persons.splice();
    //below one using Spread operator to immutable array from ES6 
    //here its a new array objects from old array
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "AAA",
          age: 28
        },
        {
          name: event.target.value,
          age: 27
        },
        {
          name: "CCC",
          age: 26
        }
      ]
    })
  }
  toggleChangeHandler = () => {
    const DoesShow = this.state.showPersons;
    this.setState({ showPersons: !DoesShow })
  }
  render() {
    const inlineStyle = {
      backgroundColor: '#eb2edb',
      color: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* SHould have return statement for map function */}
          {this.state.persons.map((person,index) =>{
            return <Person name={person.name} and age={person.age} click = {() => this.deletePersonHandler(index)}/>
          })}
        </div>)
    }
    return (
      <div className="App">
        <button style={inlineStyle} onClick={this.toggleChangeHandler}>Click Me!</button>
        {persons}
      </div>
    );
  }
}

export default App;
