import React from 'react';
import './App.css';

function App() {
  console.log("Rendering Component", new Date().getTime());

  const listArray = [
    <li>Some stuff</li>,
    <li>Some more stuff</li>,
    <li>Some more stuff again</li>,
    <li>Even more stuff</li>,
  ];


  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button">Clear List</button>

      <ul>
        {listArray}
      </ul>

    </div>
  );
}

export default App;
