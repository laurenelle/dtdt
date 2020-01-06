import React from 'react';
import './App.css';
import baloo from './majesticBalooie.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={baloo} alt="mascot"/>
        <p>
          Dog Training Data Tool
        </p>
      </header>
    </div>
  );
}

export default App;
