import React, { Component } from 'react';

class DisplayData extends Component {
  render() {
    const { firstName, lastName, dietaryRestriction } = this.props.data;

    return (
      <div>
        <h2>Submitted Data</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Dietary Restriction: {dietaryRestriction}</p>
      </div>
    );
  }
}

export default DisplayData;
