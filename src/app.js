import React from 'react';

import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Counter />
        <Footer />
      </>
    );
  }
}

export default App;
