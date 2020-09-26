import React, { useState } from 'react';
import './App.css';

function useForceUpdate() {
  const [, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function App() {
  console.log("Rendering Component", new Date().getTime());

  const initialData = [
    "I change my locks every 16 days.",
    "Creativity is for people with glasses who like to lie.",
    "Cultivating a manly musk puts opponent on notice.",
  ];

  const [data, setData] = useState(initialData);
  const forceUpdate = useForceUpdate();

  const listArray = data.map((item, i) => {
    return (<li key={i}>{item}</li>);
  });

  const clear = function () {
    console.log("clearing list", new Date().getTime());

    data.length = 0;  // Just changes the existing 'data' state object
    setData(data);    // Still Doesn't work, same array object so React doesn't notice
    // setData([]);      // Need to use a new array object
    // forceUpdate();    // 
  };

  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button" onClick={clear}>Clear List</button>

      <ul>
        {listArray}
      </ul>

    </div>
  );
}

export default App;
