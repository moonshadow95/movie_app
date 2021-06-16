import './app.css';
import Proptypes from 'prop-types';
import React from 'react';
import { current } from 'immer';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log('component Rendered');
  }
  componentDidUpdate() {
    console.log('I just updated');
  }
  componentWillUnmount() {
    console.log('goodbye');
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
