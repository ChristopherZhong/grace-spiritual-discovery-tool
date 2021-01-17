import { RadioGroup } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { Choice } from '../x-choice/Choice';
import { Question } from '../../types/Question';

export interface ChoicesProps {
  readonly handleChange: UpdateAnswerHandler;
  readonly language: string;
  readonly question: Question;
}

export function Choices(props: ChoicesProps): JSX.Element {
  const { handleChange, language, question } = props;
  return (
    <RadioGroup
      aria-label='choices'
      name='choices'
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const value: number = Number(event.target.value);
        console.debug(`>>> Choices::onChange(): question.index=${question.index} : ${value}`);
        handleChange(question, value);
      }}
      row
    >
      {question.choices.map((choice, index) => {
        return (
          <Choice
            choice={choice}
            index={index}
            key={index}
            language={language}
          />
        );
      })}
    </RadioGroup>
  );
}
