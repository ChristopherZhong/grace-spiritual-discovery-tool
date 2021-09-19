import React from 'react';
import { Choice as IChoice } from '../../types/Choice';
import { getText } from '../../types/MultilingualText';
import { FormControlLabel, Radio, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/language';

export interface ChoiceProps {
  readonly choice: IChoice;
  readonly index: number;
}

export function Choice({ choice, index }: ChoiceProps): JSX.Element {
  const { language } = useLanguage();
  const [text, found] = getText(choice.text, language.code);
  const label = (
    <Typography variant="body2">
      {found ? '' : '*'}
      {text}
    </Typography>
  );
  const value = `${choice.points}`;
  return <FormControlLabel control={<Radio />} key={index} label={label} value={value} />;
}
