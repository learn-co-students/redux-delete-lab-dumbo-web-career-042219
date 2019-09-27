import React, { Component } from 'react';

class Band extends Component {

  handleChange = () => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={this.handleChange}>DELETE</button>
      </li>
    );
  }
};

export default Band;
