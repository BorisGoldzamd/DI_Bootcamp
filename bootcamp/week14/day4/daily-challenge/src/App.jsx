import React, { Component } from 'react';
import NameForm from './components/Form';
import DisplayData from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedData: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(data) {
    this.setState({ submittedData: data });
  }

  render() {
    return (
      <div>
        <h1>Form Example</h1>
        <NameForm onSubmit={this.handleFormSubmit} />
        {this.state.submittedData && <DisplayData data={this.state.submittedData} />}
      </div>
    );
  }
}

export default App;
