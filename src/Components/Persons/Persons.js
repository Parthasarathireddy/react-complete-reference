import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
        // static getDerivedStateFromProps(props, state){
        //         console.log('[Persons.js File] get Derived State From Props');
        //         return state;
        // }
        shouldComponentUpdate(nextProps, nextState){
                //have to return true or false
                console.log('[persons.js] should componet update');
                return true;
        }
        // componentWillReceiveProps(props){
        //         //legacy life cycle not available after 16.3
        //         console.log('[persons.js] component will receive props', props);
        // }
        getSnapshotBeforeUpdate(prevProps, prevState){
                //use snapshot save some data before updating and use the after update
                console.log('[persons.js] getsnapshot before update');
                return {messaage : 'snapshot!'};
        }
        // componentWillUpdate(){
        //         //legacy life cycle not avaliable anymore
        //         console.log('persons.js')
        // }
        componentDidUpdate(prevProps,prevState,snapshot){
                console.log('[persons.js] component did update');
                console.log(snapshot);
        }
        render() {
                console.log('[persons.js] rendering...')
                return this.props.persons.map((person, index) => {
                        return <Person
                                click={() => this.props.clicked(index)}
                                name={person.name} and
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.props.changed(event, person.id)}
                        />
                });
        }
};

export default Persons;