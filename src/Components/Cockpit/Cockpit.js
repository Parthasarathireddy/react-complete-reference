import React, {useEffect} from 'react';
import Classes from './Cockpit.css';
const Cockpit = (props) => {
    useEffect(()=>{
        console.log('UseEffect run every render cycle');
    })
    const Assignedclasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = Classes.Red;
    }
    if(props.persons.length<=2){
      Assignedclasses.push(Classes.red);
    }
    if(props.persons.length<=1){
      Assignedclasses.push(Classes.bold);
    }
    return (
        <div className = {Classes.Cockpit}>
            <p className={Assignedclasses.join(' ')}>Set ClassNames Dynamically</p>
            <button className={btnClass} onClick={props.clicked}>Click Me!</button>
        </div>
    );
}
export default Cockpit;