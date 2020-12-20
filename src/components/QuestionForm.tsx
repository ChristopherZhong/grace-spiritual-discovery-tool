import { Question } from '../types/Question';
import { Card, FormControl, FormLabel } from '@material-ui/core';
import { getText } from '../types/Text';
import { Choices } from './Choices';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';

interface QuestionFormProps {
  handleChange: UpdateAnswerHandler;
  language: string;
  question: Question;
  questionIndex: number;
}

export function QuestionForm(props: QuestionFormProps): JSX.Element {
  const { handleChange, language, question, questionIndex } = props;
  return (
    <FormControl
      component={Card}
      key={`${question.type}-${questionIndex}`}
      required
    >
      <FormLabel required>{getText(question.text, language)}</FormLabel>
      <Choices
        choices={question.choices}
        language={language}
        handleChange={handleChange}
        questionType={question.type}
        questionIndex={questionIndex}
      />
    </FormControl>
  );
}
