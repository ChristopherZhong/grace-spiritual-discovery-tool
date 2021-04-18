import React from 'react';
import { RadioGroup } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { Choice } from '../x-choice/Choice';
import { Question } from '../../types/Question';
import { useStyles } from './Choices.styles';

export interface ChoicesProps {
  readonly handleChange: UpdateAnswerHandler;
  readonly question: Question;
}

export function Choices({ handleChange, question }: ChoicesProps): JSX.Element {
  const classes = useStyles();
  return (
    <RadioGroup
      aria-label='choices'
      className={classes.radioGroup}
      name='choices'
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        console.debug(`>>> Choices::onChange(): question.index=${question.index} : ${value}`);
        handleChange(question, value);
      }}
    >
      {question.choices.map((choice, index) => {
        return (
          <Choice
            choice={choice}
            index={index}
            key={index}
          />
        );
      })}
    </RadioGroup>
  );
}
