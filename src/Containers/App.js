import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js constructor' + props);
  }

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
    showPersons: false,
    showCockpit: true
  }
  static getDerivedStateFromProps(props, state){
    console.log('[App.js getDerived State]', props);
    return state;
  }
  // componentWillMount(){
    //legacy life cycle
  //   console.log('[App.js Component will mount] preparing state');
  // }

  componentDidMount(){
    console.log('[App.js file] component did mount Ajax request')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[app.js] should component update');
    //its a powerful hook if it returns false prevents Vitrual DOM rendering
    //return false event not triggered if true even triggered
    return true;
  }
  componentDidUpdate(){
    console.log('[app.js component did update]')
  }
  deletePersonHandler = (personIndex)=>{
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
    console.log('[App.js file] render method')
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons = {this.state.persons}
                  changed = {this.nameChangedHandler}
                  clicked = {this.deletePersonHandler} />
        </div>)
    }
    //if you are using StyleRoot comonent need to wrap up entire div into <StyleRoot> element
    return (
        <div className={Classes.App}>
        <button onClick = {()=> this.setState({showCockpit: false })}>Remove</button>
        {this.state.showCockpit ? <Cockpit 
        clicked = {this.toggleChangeHandler} 
        showPersons = {this.state.showPersons} 
        persons = {this.state.persons}/>: null}
          {persons}
        </div>
    );
  }
}

export default App;
