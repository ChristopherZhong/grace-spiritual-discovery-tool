import { Question } from '../types/Question';
import { List } from '@material-ui/core';
import { QuestionForm } from './QuestionForm';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';

interface QuestionsListProps {
  handleChange: UpdateAnswerHandler;
  language: string;
  questions: Array<Question>;
}

export function QuestionsList(props: QuestionsListProps): JSX.Element {
  const { handleChange, language, questions } = props;
  return (
    <List component='ol'>
      {questions.map((question, index) =>
        <QuestionForm
          handleChange={handleChange}
          language={language}
          question={question}
          questionIndex={index}
        />)}
    </List>
  );
}
