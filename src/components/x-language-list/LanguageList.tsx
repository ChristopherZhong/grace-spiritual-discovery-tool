import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useStyles } from './LanguageList.styles';
import { languages } from '../../contexts/language';

export function LanguageList(): JSX.Element {
  const classes = useStyles();
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || defaultLanguageOption.code);
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => { setLanguage(event.target.value as string); };
  useEffect(() => { localStorage.setItem('language', language); }, [language]);

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={classes.select}
        id='language-select'
        onChange={handleChange}
        value={language}
      >
        {languages.map((value) => (
          <MenuItem key={value.code} value={value.code}>{value.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
