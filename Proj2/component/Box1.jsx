import React, { Component } from 'react';

class Box1 extends Component {
  render(props) {
    return (
        <div className="box">
          Box{this.props.index}
          <p>{this.props.name}</p>
        </div>
    );
  }
}

export default Box1;