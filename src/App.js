import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name = "aaa" and age = "26"/>
        <Person name = "bbb" and age = "25">My hobbies are Coding</Person>
        <Person name = "ccc" and age = "24"/>
      </header>
    </div>
  );
}

export default App;
