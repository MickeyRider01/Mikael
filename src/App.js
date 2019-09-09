import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard'
let x = 10
const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <WordCard value="hello"/>
        </div>
      </div>
 );
 }
}
export default App;

