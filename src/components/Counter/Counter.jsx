import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter = e => {
    e.preventDefault();
    this.setState(previousState => ({count: previousState.count + 1}));
  };

  decrementCounter = e => {
    e.preventDefault();
    this.setState(previousState => ({count: previousState.count - 1}));
  };

  render() {
    return (
      <>
        <h4>{this.state.count}</h4>
        <div id="buttons">
          <a href="#" onClick={this.incrementCounter}>Increment Counter</a>
          <a href="#" onClick={this.decrementCounter}>Decrement Counter</a>
        </div>
      </>
    );
  }
}

export default Counter;
