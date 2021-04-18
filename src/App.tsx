import React, { useState } from 'react';
import './App.css';
import { Questions } from './components/x-questions/Questions';
import { Container, Typography } from '@material-ui/core';
import { Assessment } from './components/x-assessment/Assessment';
import { UpdateAnswerHandler } from './types/UpdateAnswerHandler';
import { Question } from './types/Question';
import { loadQuestions } from './types/RawQuestion';
import { TopBar } from './components/x-topbar/TopBar';
import { LanguageProvider } from './contexts/language';

const questions = loadQuestions();

function App(): JSX.Element {
  const [state, setState] = useState(questions);

  const handleChange: UpdateAnswerHandler = (question: Question, value: number) => {
    console.debug(`>>> App::handleChange() : value=${value}, question=${JSON.stringify(question)}`);
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
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <TopBar/>
          Grace Spiritual Discovery Tool
        </header>
        <Container>
          <Typography>Questions</Typography>
          <Questions handleChange={handleChange} questions={state}/>
          <Assessment questions={state}/>
        </Container>
      </div>
    </LanguageProvider>
  );
}

export default App;
