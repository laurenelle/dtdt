import React from 'react';
import './App.css';
import baloo from './majesticBalooie.png';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <header className="App-header">
        <p>
          Dog Training Data Tool
        </p>
        <img src={baloo} alt="mascot"/>
        <p>
          <Button>Boop</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
