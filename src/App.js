import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard'
class App extends Component {
  render() {
    return (
      <div>
        <div className="Head">
          <h1>Card Game</h1>
          <h2>created by Mikael Yapa 5935512082</h2>
        </div>
        <div className="App">
          <WordCard value="Mikael" />
        </div>

      </div>
    );
  }
}
export default App;

