import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  console.log("Rendering Component", new Date().getTime());
  // Note we removed StrictMode from index.js to prevent double render

  const [data, setData] = useState([]);

  const listArray = data.map((item, i) => {
    return (<li key={i}>{item}</li>);
  });

  const addItem = function (event) {
    const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

    axios(url).then(result => {
      setData([...result.data, ...data]);
    });
    
  };

  const clear = function () {
    setData([]);
  };

  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button" onClick={addItem}>Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button" onClick={clear}>Clear List</button>

      <ul>
        {listArray}
      </ul>

    </div>
  );
}

export default App;
