import { Question } from '../types/Question';
import { List } from '@material-ui/core';
import { UpdateAnswerHandler } from './Questions';
import { QuestionForm } from './QuestionForm';

export function QuestionsList(questions: Array<Question>, language: string, handleChange: UpdateAnswerHandler): JSX.Element {
  const mapQuestion = (question: Question, index: number) => QuestionForm(question, index, language, handleChange);
  return (
    <List component='ol'>
      {questions.map(mapQuestion)}
    </List>
  );
}
