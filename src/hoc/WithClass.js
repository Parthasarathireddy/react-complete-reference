import React from 'react';

//another way of HOC below
const withClass = (WrappedComponent, className)=>{
    return props =>(
        <div className = {className}>
            <WrappedComponent {...props}/>
        </div>
    )
}
export default withClass;