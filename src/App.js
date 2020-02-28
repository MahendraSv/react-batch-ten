import React from 'react';

import './App.css';

import Label from './components/Label';
import Lable1 from './components/Label1';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Label text="first time usage!" />
      <hr />
      <Label text="second time usage" xyz="hello" />
      <hr />
      <Lable1 text="label1 component (functional component)" />
    </div>
  );
}

export default App;
