import React, { ChangeEvent } from 'react';
import { RadioGroup } from '@mui/material';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { Choice } from '../x-choice/Choice';
import { Question } from '../../types/Question';

export interface ChoicesProps {
  readonly handleChange: UpdateAnswerHandler;
  readonly question: Question;
}

export function Choices({ handleChange, question }: ChoicesProps): JSX.Element {
  return (
    <RadioGroup
      aria-label="choices"
      name="choices"
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        console.debug(`>>> Choices::onChange(): question.index=${question.index} : ${value}`);
        handleChange(question, value);
      }}
      sx={{ flex: 'auto' }}
    >
      {question.choices.map((choice, index) => {
        return <Choice choice={choice} index={index} key={index} />;
      })}
    </RadioGroup>
  );
}
