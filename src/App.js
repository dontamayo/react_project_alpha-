import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am Don! </h1>
        <h2>I am learning React</h2>
        <p>Learning is Unlimited, Why Stop?</p>
      </div>
    );

    //other option to use aside from jsx
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React Dev'));
  }
}

export default App;
