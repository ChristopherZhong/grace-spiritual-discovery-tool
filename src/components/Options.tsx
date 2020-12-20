import { Option } from '../types/Option';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { getText } from '../types/Text';

function createOption(option: Option, index: number, language: string) {
  const text = getText(option.text, language);
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

export function Options(options: Option[], language: string) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const mapOption = (option: Option, index: number) => createOption(option, index, language);

  return (
    <RadioGroup aria-label="options" name="options" onChange={handleChange} row value={value}>
      {options.map(mapOption)}
    </RadioGroup>
  );
}
