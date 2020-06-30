import React, {useEffect} from 'react';
import Classes from './Cockpit.css';
const Cockpit = (props) => {
    useEffect(()=>{
        console.log('UseEffect run every render cycle');
        setTimeout(()=>{
            alert('Controlling UseEffect');
        },1000);
        //we can do Http request
        //we can use UseEffect more than once
        //if we use empty array it will work as component did mount
        //if we pass any this in array like [props.persons] only when it changes only it will call. otherwise it will call only at first time when array is empty.
    },[]);
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