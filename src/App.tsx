import React from 'react';
import './App.css';
import { Questions } from './components/Questions';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Grace Spiritual Discovery Tool
      </header>
      <Container>
        <Questions/>
      </Container>
    </div>
  );
}

export default App;
