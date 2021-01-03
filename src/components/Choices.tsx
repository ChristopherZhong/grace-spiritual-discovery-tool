import { Choice } from '../types/Choice';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { ChangeEvent, Component } from 'react';
import { getText } from '../types/Text';
import { QuestionType } from '../types/QuestionType';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';

interface ChoiceProps {
  choice: Choice;
  index: number;
  language: string;
}

function ChoiceFormControlLabel(props: ChoiceProps): JSX.Element {
  const text = getText(props.choice.text, props.language);
  const label = <Typography variant='body2'>{text}</Typography>;
  const value = `${props.choice.points}`;
  return (
    <FormControlLabel
      control={<Radio/>}
      key={props.index}
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
  render(): JSX.Element {
    const { choices, handleChange, language, questionIndex, questionType } = this.props;
    const mapChoice = (choice: Choice, index: number) => <ChoiceFormControlLabel
      choice={choice}
      index={index}
      language={language}
    />;
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
