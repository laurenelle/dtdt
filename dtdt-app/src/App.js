import React from 'react';
import './App.css';
import baloo from './majesticBalooie.png';
import { Button, Form, Group, Label, Control, Text } from 'react-bootstrap';

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
          Project Boop
        </p>
        <img src={baloo} alt="mascot"/>
        <p>
          <Form>
            <Form.Group controlId="formPlanSearch">
              <Form.Label>Search for a training plan: </Form.Label>
              <Form.Control type="search" placeholder="husbandry" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Boop
            </Button>
          </Form>
        </p>
      </header>
    </div>
  );
}

export default App;
