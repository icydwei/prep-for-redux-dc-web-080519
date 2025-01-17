import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="App">
        <Header count={this.state.count}/>
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

class Header extends Component {
  render() {
      let remainder = this.props.count % 5;
      let upToNext = 5 - remainder;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{`The current count is less than ${this.props.count + upToNext}`}</h1>
      </header>
    );
  }
}

class Counter extends Component {

  renderDescription = () => {
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        <h3>{this.renderDescription()}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
