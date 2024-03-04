import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dietaryRestriction: 'none' // Valor predeterminado del selector
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <label>
          Dietary Restriction:
          <select name="dietaryRestriction" value={this.state.dietaryRestriction} onChange={this.handleChange}>
            <option value="none">None</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-free</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm