import React from 'react';

class Label extends React.Component {
  state = {
    abc : 10
  };

  render() {
    // destructuring
    const { text, xyz } = this.props;
    return (
      <div style={{fontSize: "20px", backgroundColor:"yellow"}}>
        {
          text 
        }
        {
          xyz
        }
        {
          this.state.abc
        }
      </div>
    );
  }
}

export default Label;