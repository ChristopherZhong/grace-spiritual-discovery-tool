import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { getLanguage, languages, useLanguage } from '../../contexts/language';

export function LanguageList(): JSX.Element {
  const { language, setLanguage } = useLanguage();
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(getLanguage(event.target.value));
  };

  return (
    <FormControl>
      <Select id="language-select" onChange={handleChange} sx={{ minWidth: 120 }} value={language.code}>
        {languages.map((value) => (
          <MenuItem key={value.code} value={value.code}>
            {value.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
