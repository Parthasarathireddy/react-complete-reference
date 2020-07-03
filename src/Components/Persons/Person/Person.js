
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  //another way to use Ref
  constructor(props){
    super(props);
    //older approch for ref
    this.inputElementRef = React.createRef();

  }
  componentDidMount(){
    //new approch
  //  this.inputElement.focus();
  //old approch
    this.inputElementRef.current.focus();
  }
  render(){
  console.log('[person.js] rendering...');
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated !</p> : <p>Please login </p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          i am from Person {this.props.name} and {this.props.age}
        </p>
        <h2>{this.props.children}</h2>
        <input type="text" 
        //ref = {(inputEl) => this.inputElement = inputEl} 
        ref = {this.inputElementRef}
        onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}
Person.propTypes = {
  click : PropTypes.func,
  name: PropTypes.string,
  age : PropTypes.number,
  changed : PropTypes.func
};
export default withClass(Person, classes.Person);