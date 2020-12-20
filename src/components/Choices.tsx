import { Choice } from '../types/Choice';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { ChangeEvent, Component } from 'react';
import { getText } from '../types/Text';
import { QuestionType } from '../types/QuestionType';
import { UpdateAnswerHandler } from './Questions';

function ChoiceFormControlLabel(choice: Choice, index: number, language: string): JSX.Element {
  const text = getText(choice.text, language);
  const label = <Typography variant='body2'>{text}</Typography>;
  const value = `${choice.points}`;
  return (
    <FormControlLabel
      control={<Radio/>}
      key={index}
      label={label}
      labelPlacement='top'
      value={value}
    />
  );
}

interface ChoicesProps {
  choices: Array<Choice>;
  handleChange: UpdateAnswerHandler;
  language: string;
  questionType: QuestionType;
  questionIndex: number;
}

export class Choices extends Component<ChoicesProps> {
  constructor(props: ChoicesProps) {
    super(props);
  }

  render(): JSX.Element {
    const { choices, handleChange, language, questionIndex, questionType } = this.props;
    const mapChoice = (choice: Choice, index: number) => ChoiceFormControlLabel(choice, index, language);
    return (
      <RadioGroup
        aria-label='choices'
        name='choices'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          console.log(`>>> Choices::render()::onChange(): index=${questionIndex} : ${event.target.value}`);
          handleChange(questionType, questionIndex, Number(event.target.value));
        }}
        row
      >
        {choices.map(mapChoice)}
      </RadioGroup>
    );
  }
}
