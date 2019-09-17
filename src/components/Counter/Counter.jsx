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
          <button onClick={this.incrementCounter}>Increment Counter</button>
          <button onClick={this.decrementCounter}>Decrement Counter</button>
        </div>
      </>
    );
  }
}

export default Counter;
