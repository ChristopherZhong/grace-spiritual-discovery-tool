import { Choice } from '../types/Choice';
import { RadioGroup } from '@material-ui/core';
import { ChangeEvent } from 'react';
import { QuestionType } from '../types/QuestionType';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';
import { ChoiceRadio } from './ChoiceRadio';

interface ChoicesProps {
  choices: Array<Choice>;
  handleChange: UpdateAnswerHandler;
  language: string;
  questionType: QuestionType;
  questionIndex: number;
}

export function Choices(props: ChoicesProps): JSX.Element {
  const { choices, handleChange, language, questionIndex, questionType } = props;
  const mapChoice = (choice: Choice, index: number) => (
    <ChoiceRadio
      choice={choice}
      index={index}
      key={index}
      language={language}
    />
  );
  return (
    <RadioGroup
      aria-label='choices'
      name='choices'
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        console.debug(`>>> Choices::onChange(): index=${questionIndex} : ${event.target.value}`);
        handleChange(questionType, questionIndex, Number(event.target.value));
      }}
      row
    >
      {choices.map(mapChoice)}
    </RadioGroup>
  );
}
