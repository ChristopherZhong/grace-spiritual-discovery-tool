import React, { useState } from 'react';
import './App.css';
import { Questions } from './components/x-questions/Questions';
import { Container, Typography } from '@material-ui/core';
import { Results } from './components/x-results/Results';
import { UpdateAnswerHandler } from './types/UpdateAnswerHandler';
import { Question } from './types/Question';
import { loadQuestions } from './types/RawQuestion';

const questions = loadQuestions();

function App() {
  const [language] = useState('en');
  const [state, setState] = useState(questions);

  const handleChange: UpdateAnswerHandler = (question: Question, value: number) => {
    console.log(`>>> Questions::handleChange() : question=${JSON.stringify(question)}`);
    console.log(`>>> Questions::handleChange() : value=${value}`);
    setState((prevQuestions) => {
      return prevQuestions.map((value1) => {
        const copy = { ...value1 };
        if (value1.index === question.index) {
          copy.answer = value;
        }
        return copy;
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        Grace Spiritual Discovery Tool
      </header>
      <Container>
        <Typography>Questions</Typography>
        <Questions
          handleChange={handleChange}
          language={language}
          questions={state}
        />
        <Results
          language={language}
          questions={state}
        />
      </Container>
    </div>
  );
}

export default App;
