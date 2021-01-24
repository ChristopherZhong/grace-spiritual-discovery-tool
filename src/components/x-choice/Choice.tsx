import { Choice as IChoice } from '../../types/Choice';
import { getText } from '../../types/MultilingualText';
import { FormControlLabel, Radio, Typography } from '@material-ui/core';

export interface ChoiceProps {
  readonly choice: IChoice;
  readonly index: number;
  readonly labelPlacement: 'end' | 'start' | 'top' | 'bottom';
  readonly language: string;
}

export function Choice(props: ChoiceProps): JSX.Element {
  const [text, found] = getText(props.choice.text, props.language);
  const label = <Typography variant='body2'>{found ? '' : '*'}{text}</Typography>;
  const labelPlacement = props.labelPlacement;
  const value = `${props.choice.points}`;
  return (
    <FormControlLabel
      control={<Radio/>}
      key={props.index}
      label={label}
      labelPlacement={labelPlacement}
      value={value}
    />
  );
}
