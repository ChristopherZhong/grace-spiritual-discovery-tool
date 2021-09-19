import React from 'react';
import { Grid } from '@mui/material';
import { Question as IQuestion } from '../../types/Question';
import { Question } from '../x-question/Question';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';

export interface QuestionsProps {
  readonly handleChange: UpdateAnswerHandler;
  readonly questions: ReadonlyArray<IQuestion>;
}

export function Questions({ handleChange, questions }: QuestionsProps): JSX.Element {
  return (
    <Grid alignItems="stretch" container direction="column" justifyContent="center" spacing={2}>
      {questions.map((question) => (
        <Grid item key={question.index} zeroMinWidth>
          <Question handleChange={handleChange} key={question.index} question={question} />
        </Grid>
      ))}
    </Grid>
  );
}
