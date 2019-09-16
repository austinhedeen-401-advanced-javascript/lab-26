import React from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
