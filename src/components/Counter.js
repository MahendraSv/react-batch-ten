import React from 'react';

class Counter extends React.Component {

  state = {
    i: 0
  };

  handleClick = () => {
    this.setState({
      i: this.state.i + 1
    });
  };

  handleClick1 = () => {
    this.setState({
      i: this.state.i - 1
    });
  };

  render() {
    return (
      <div>
        {this.state.i}
        <br />
        <button className="btn btn-primary" onClick={this.handleClick}>Increment</button>
        <button className="btn btn-danger" onClick={this.handleClick1}>Decrement</button>
      </div>
    );
  }
}

export default Counter;