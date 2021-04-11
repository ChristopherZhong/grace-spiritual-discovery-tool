import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useStyles } from './LanguageList.styles';
import { getLanguage, languages, useLanguage } from '../../contexts/language';

export function LanguageList(): JSX.Element {
  const classes = useStyles();
  const { language, setLanguage } = useLanguage();
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => { setLanguage(getLanguage(event.target.value)); };

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={classes.select}
        id='language-select'
        onChange={handleChange}
        value={language.code}
      >
        {languages.map((value) => (
          <MenuItem key={value.code} value={value.code}>{value.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
