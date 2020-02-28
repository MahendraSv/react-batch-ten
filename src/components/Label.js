import React from 'react';

class Label extends React.Component {
  // props.text
  // props.xyz
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
      </div>
    );
  }
}

export default Label;