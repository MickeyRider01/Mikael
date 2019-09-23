import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard'
let x = 10
const word = "MIkael";
class App extends Component {
  render() {
    return (
      <div classname="Head">
        <h1>Card Game</h1>
        <h2>created by Mikael Yapa 5935512082</h2>
      <div className="App">
        <div className="card">
          <WordCard value="Mikael"/>
        </div>
      </div>
      </div>
 );
 }
}
export default App;

