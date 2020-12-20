import { Question } from '../types/Question';
import { Card, FormControl, FormLabel } from '@material-ui/core';
import { getText } from '../types/Text';
import { Choices } from './Choices';
import { UpdateAnswerHandler } from './Questions';

export function QuestionForm(question: Question, index: number, language: string, handleChange: UpdateAnswerHandler): JSX.Element {
  return (
    <FormControl
      component={Card}
      key={`${question.type}-${index}`}
      required
    >
      <FormLabel required>{getText(question.text, language)}</FormLabel>
      <Choices
        choices={question.choices}
        language={language}
        handleChange={handleChange}
        questionType={question.type}
        questionIndex={index}
      />
    </FormControl>
  );
}
