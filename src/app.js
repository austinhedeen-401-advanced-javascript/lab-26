import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ stuff: Math.floor(Math.random() * 20 + 1) });
  };

  render() {
    return (
      <div>
        <h4>{this.state.stuff}</h4>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
