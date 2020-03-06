import React from 'react';

import Label from './Label';
import Lable1 from './Label1';
import Counter from './Counter';

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <Label text="first time usage!" />
        <hr />
        <Label text="second time usage" xyz="hello" />
        <hr />
        <Lable1 text="label1 component (functional component)" />
        <hr />
        <Counter />
      </div>
    );
  }
}

export default Example1;