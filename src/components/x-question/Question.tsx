import React from 'react';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { Question as IQuestion } from '../../types/Question';
import { Card, CardActions, CardContent, CardHeader, Divider, FormControl, FormLabel } from '@mui/material';
import { getText } from '../../types/MultilingualText';
import { Choices } from '../x-choices/Choices';
import { useLanguage } from '../../contexts/language';

export interface QuestionProps {
  readonly handleChange: UpdateAnswerHandler;
  readonly question: IQuestion;
}

export function Question({ handleChange, question }: QuestionProps): JSX.Element {
  const { language } = useLanguage();
  const [text, found] = getText(question.text, language.code);
  return (
    <Card>
      <CardHeader
        title={`Question ${question.index}`}
        titleTypographyProps={{
          color: 'textSecondary',
          variant: 'body2',
          size: 'small',
          sx: { fontWeight: 'bold', textAlign: 'start', textTransform: 'uppercase' },
        }}
      />
      <FormControl component="fieldset" required>
        <CardContent>
          <FormLabel
            component="legend"
            required
            sx={{ fontSize: 'x-large', fontWeight: 'lighter', textAlign: 'start' }}
          >
            {found ? '' : '*'}
            {text}
          </FormLabel>
        </CardContent>
        <CardContent>
          <Divider />
        </CardContent>
        <CardContent>
          <CardActions>
            <Choices handleChange={handleChange} question={question} />
          </CardActions>
        </CardContent>
      </FormControl>
    </Card>
  );
}
