import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilary';

class Person extends Component {
  render(){
  console.log('[person.js] rendering...');

    return (
      //Relace 'Aux' with 'Fragment' or React.Fragment
      <Fragment>
        <p onClick={this.props.click}>
          i am from Person {this.props.name} and {this.props.age}
        </p>
        <h2>{this.props.children}</h2>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Fragment>
    );
  }
}
export default Person;