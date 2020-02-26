import React from 'react';

import './App.css';

import Label from './components/Label';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Label text="first time usage!" />
      <hr />
      <Label text="second time usage" xyz="hello" />
    </div>
  );
}

export default App;
