import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
  render(){
  console.log('[person.js] rendering...');

    return (
      <div className = {classes.Person}>
        <p onClick={this.props.click}>
          i am from Person {this.props.name} and {this.props.age}
        </p>
        <h2>{this.props.children}</h2>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}
export default Person;