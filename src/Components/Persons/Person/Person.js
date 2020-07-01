import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilary';

class Person extends Component {
  render(){
  console.log('[person.js] rendering...');

    return (
      <Aux>
        <p onClick={this.props.click}>
          i am from Person {this.props.name} and {this.props.age}
        </p>
        <h2>{this.props.children}</h2>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}
export default Person;