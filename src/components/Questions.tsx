import questionsJson from '../questions.json';
import { Question } from '../types/Question';
import { QuestionType } from '../types/QuestionType';
import { useState } from 'react';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';
import { Grid } from '@material-ui/core';
import { ParsedQuestion } from '../types/ParsedQuestion';
import { QuestionCard } from './QuestionCard';

const questions = questionsJson as Array<Question>;

interface QuestionsState {
  questions: Array<ParsedQuestion>;
}

// function sum(previousValue: number, currentValue: number): number {
//   return previousValue + currentValue;
// }

function parse(value: Question, index: number) {
  console.debug(`>>> Questions::() : index=${index}, value=${JSON.stringify(value)}`);
  return {
    answer: 0,
    index: index + 1,
    question: value,
  };
}

export function Questions(): JSX.Element {
  console.log(`Loading ${questions.length} questions ...`);
  let initialState: QuestionsState = {
    questions: questions.map(parse),
  };
  console.debug(`>>> Questions::() : initialState=${JSON.stringify(initialState)}`);

  let [state, setState] = useState<QuestionsState>(initialState);

  // let getScore: GetScore = (questionType: QuestionType) => {
  //   console.debug(`>>> Questions::getScore() : questionType=${questionType}`);
  //   state.questions.filter((value, index) => value.question.type === questionType);
  //   // const score = state.scoreByType.get(questionType);
  //   // if (score === undefined) {
  //   //   console.warn(`Something went wrong! get(${questionType}) should return a number`);
  //   //   return 0;
  //   // }
  //   // console.debug(`>>> Questions::getScore() : score=${score}`);
  //   return 0;
  // };

  let handleChange: UpdateAnswerHandler = (questionType: QuestionType, questionIndex: number, value: number) => {
    console.debug(`>>> Questions::handleChange() : questionType=${questionType}, questionIndex=${questionIndex}, value=${value}`);
    setState(prevState => {
      return prevState;
    });
    // let answers: Array<number> | undefined = state.answersByType.get(questionType);
    // if (answers === undefined) {
    //   console.warn(`Something went wrong! 'get(${questionType})' should return an array`);
    //   return;
    // }
    // console.debug(`>>> Questions::handleChange() : BEFORE: questionType=${questionType}, answers=${answers}`);
    // answers = answers.map((current, index) => index === questionIndex ? value : current);
    // console.debug(`>>> Questions::handleChange() :  AFTER: questionType=${questionType}, answers=${answers}`);
    //
    // const score = answers.reduce(sum, 0);
    // console.debug(`>>> Questions::handleChange() : score=${score}`);
    //
    // const state: QuestionsState = {
    //   ...state,
    //   answersByType: new Map(state.answersByType).set(questionType, answers),
    //   scoreByType: new Map(state.scoreByType).set(questionType, score),
    // };
    // console.debug(`>>> Questions::handleChange() : state=${JSON.stringify(state)}`);
    //
    // console.debug(`>>> Questions::handleChange() : BEFORE: ${JSON.stringify(state)}`);
    // setState(state);
    // console.debug(`>>> Questions::handleChange() :  AFTER: ${JSON.stringify(state)}`);
  };

  return (
    <Grid
      alignItems='stretch'
      container
      direction='column'
      justify='center'
      spacing={5}
    >
      {state.questions.map((value) =>
        <Grid item key={value.index} zeroMinWidth>
          <QuestionCard
            // getScore={getScore}
            handleChange={handleChange}
            key={value.index}
            language={'en'}
            question={value}
          />
        </Grid>)}
    </Grid>
  );
}
