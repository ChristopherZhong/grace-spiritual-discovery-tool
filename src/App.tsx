import React from 'react';
import './App.css';
import { Questions } from './components/Questions';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <header className="App-header">
        Grace Spiritual Discovery Tool
      </header>
      <Questions/>
    </div>
  );
}

export default App;
