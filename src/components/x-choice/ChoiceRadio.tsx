import { Choice } from '../../types/Choice';
import { getText } from '../../types/Text';
import { FormControlLabel, Radio, Typography } from '@material-ui/core';

export interface ChoiceProps {
  choice: Choice;
  index: number;
  language: string;
}

export function ChoiceRadio(props: ChoiceProps): JSX.Element {
  const [text, found] = getText(props.choice.text, props.language);
  const label = <Typography variant='body2'>{found ? '' : '*'}{text}</Typography>;
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
