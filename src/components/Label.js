import React from 'react';

class Label extends React.Component {
  // props.text
  // props.xyz
  render() {
    return (
      <div style={{fontSize: "20px", backgroundColor:"yellow"}}>
        {
          this.props.text 
        }
        {
          this.props.xyz
        }
      </div>
    );
  }
}

export default Label;