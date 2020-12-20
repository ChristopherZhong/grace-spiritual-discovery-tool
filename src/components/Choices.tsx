import { Choice } from '../types/Choice';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { getText } from '../types/Text';

function createChoice(choice: Choice, index: number, language: string) {
  const text = getText(choice.text, language);
  return (
    <FormControlLabel
      control={<Radio/>}
      key={index}
      label={text}
      labelPlacement='top'
      value={text}
    />
  );
}

export function Choices(choices: Choice[], language: string) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const mapChoice = (choice: Choice, index: number) => createChoice(choice, index, language);

  return (
    <RadioGroup aria-label="options" name="options" onChange={handleChange} row value={value}>
      {choices.map(mapChoice)}
    </RadioGroup>
  );
}
