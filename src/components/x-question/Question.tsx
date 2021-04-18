import React from 'react';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { Question as IQuestion } from '../../types/Question';
import { Card, CardActions, CardContent, CardHeader, Divider, FormControl, FormLabel } from '@material-ui/core';
import { getText } from '../../types/MultilingualText';
import { Choices } from '../x-choices/Choices';
import { useStyles } from './Question.styles';
import { useLanguage } from '../../contexts/language';

export interface QuestionProps {
  readonly handleChange: UpdateAnswerHandler;
  readonly question: IQuestion;
}

export function Question({ handleChange, question }: QuestionProps): JSX.Element {
  const classes = useStyles();
  const {language} = useLanguage();
  const [text, found] = getText(question.text, language.code);
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title={`Question ${question.index}`}
        titleTypographyProps={{
          className: classes.cardHeaderTitle,
          color: 'textSecondary',
          variant: 'body2',
          size: 'small',
        }}
      />
      <FormControl className={classes.formControl} component='fieldset' required>
        <CardContent>
          <FormLabel className={classes.formLabel} component='legend' required>{found ? '' : '*'}{text}</FormLabel>
        </CardContent>
        <CardContent><Divider/></CardContent>
        <CardContent>
          <CardActions>
            <Choices
              handleChange={handleChange}
              question={question}
            />
          </CardActions>
        </CardContent>
      </FormControl>
    </Card>
  );
}
