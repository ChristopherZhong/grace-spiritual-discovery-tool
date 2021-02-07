import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useStyles } from './LanguageList.styles';

const defaultLanguageOption = {
  code: 'en',
  text: 'English',
};

const languageOptions = [
  defaultLanguageOption,
  {
    code: 'zh',
    text: '中文',
  },
];

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
        {languageOptions.map((value) => (
          <MenuItem key={value.code} value={value.code}>{value.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}