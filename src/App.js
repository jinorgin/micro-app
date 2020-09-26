import React from 'react';
import './App.css';

function App() {
  console.log("Rendering Component", new Date().getTime());
  
  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button">Clear List</button>
      
      <ul>
        <li>Some Stuff</li>
      </ul>

    </div>
  );
}

export default App;
