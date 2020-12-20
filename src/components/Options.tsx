import { Option } from '../types/Option';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { getText } from '../types/Text';

function createOption(option: Option, language: string) {
  return (
    <FormControlLabel
      control={<Radio/>}
      label={getText(option.text, language)}
      labelPlacement='top'
      value={getText(option.text, language)}
    />
  );
}

export function Options(options: Option[], language: string) {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const mapOption = (option: Option) => createOption(option, language);

  return (
    <RadioGroup aria-label="options" name="options" onChange={handleChange} row value={value}>
      {options.map(mapOption)}
    </RadioGroup>
  );
}
