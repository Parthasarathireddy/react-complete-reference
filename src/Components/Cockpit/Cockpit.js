import React, {useEffect, useRef, useContext} from 'react';
import Classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {
    const toggleRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.log(authContext);
    useEffect(()=>{
        console.log('UseEffect run every render cycle');
        // const timer = setTimeout(()=>{
        //     alert('Controlling UseEffect');
        // },1000);
        toggleRef.current.click();
        return ()=>{
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in UseEffect')
        }
        //we can do Http request
        //we can use UseEffect more than once
        //if we use empty array it will work as component did mount
        //if we pass any this in array like [props.persons] only when it changes only it will call. otherwise it will call only at first time when array is empty.
    },[]);
    useEffect(()=>{
        console.log('UseEffect 2nd run every render cycle');
        //it will call for every action
        return ()=>{
            console.log('[Cockpit.js] 2nd cleanup work in UseEffect')
        }
    })
    const Assignedclasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = Classes.Red;
    }
    if(props.personsLength<=2){
      Assignedclasses.push(Classes.red);
    }
    if(props.personsLength<=1){
      Assignedclasses.push(Classes.bold);
    }
    return (
        <div className = {Classes.Cockpit}>
            <p className={Assignedclasses.join(' ')}>Set ClassNames Dynamically</p>
            <button 
            className={btnClass}
            ref = {toggleRef}
             onClick={props.clicked}>Click Me!</button>
                <button onClick = {authContext.login}>Log in</button>
        </div>
    );
}
export default React.memo(Cockpit);