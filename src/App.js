import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id : '1',
        name: "AAA",
        age: 28
      },
      {
        id : '2',
        name: "BBB",
        age: 27
      },
      {
        id : '3',
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
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    //Modern approch
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons});
    //below one not recomended
   // const person = Object.assign({},this.state.persons[personIndex]);
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
          {/* key should be mandatory for list of elements  */}
          {this.state.persons.map((person,index) =>{
            return <Person 
            name={person.name} and 
            age={person.age} 
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event,person.id)} 
            click = {() => this.deletePersonHandler(index)}/>
          })}
        </div>)
        inlineStyle.backgroundColor = 'red';
    }
    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <div className="App">
      <p className = {classes.join(' ')}>Set ClassNames Dynamically</p>
        <button style={inlineStyle} onClick={this.toggleChangeHandler}>Click Me!</button>
        {persons}
      </div>
    );
  }
}

export default App;
