// import logo from './logo.svg';
import './App.css';
import React from 'react';

//component imports
import GameSpace from './containers/GameSpace'

function App() {
  return (
    <div className="App">
      {/* <h1>Game of Pig</h1> */}
      <GameSpace />
    </div>
  );
}

export default App;
