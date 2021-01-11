import { Choice } from '../../types/Choice';
import { RadioGroup } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { ChoiceRadio } from '../x-choice/ChoiceRadio';
import { ParsedQuestion } from '../../types/ParsedQuestion';

export interface ChoicesProps {
  handleChange: UpdateAnswerHandler;
  language: string;
  question: ParsedQuestion;
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
      {question.choices.map((choice: Choice, index: number) => {
        return (
          <ChoiceRadio
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
