import { Choice as IChoice } from '../../types/Choice';
import { getText } from '../../types/MultilingualText';
import { FormControlLabel, Radio, Typography } from '@material-ui/core';

export interface ChoiceProps {
  readonly choice: IChoice;
  readonly index: number;
  readonly language: string;
}

export function Choice({ choice, index, language }: ChoiceProps): JSX.Element {
  const [text, found] = getText(choice.text, language);
  const label = <Typography variant='body2'>{found ? '' : '*'}{text}</Typography>;
  const value = `${choice.points}`;
  return (
    <FormControlLabel
      control={<Radio/>}
      key={index}
      label={label}
      value={value}
    />
  );
}
