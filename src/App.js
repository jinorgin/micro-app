import React, { useState } from 'react';
import './App.css';

function App() {
  console.log("Rendering Component", new Date().getTime());

  const initialData = [
    "I change my locks every 16 days.",
    "Creativity is for people with glasses who like to lie.",
    "Cultivating a manly musk puts opponent on notice.",
  ];

  const [data, setData] = useState(initialData);

  const listArray = data.map(item => {
    return (<li>{item}</li>);
  });

  const addItem = function (event) {
    const newData = [...data];
    newData.push("new Item")
    setData(newData);
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
