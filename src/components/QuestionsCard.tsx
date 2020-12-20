import { Card, CardContent, CardHeader } from '@material-ui/core';
import { GetScore, UpdateAnswerHandler } from './Questions';
import { Question } from '../types/Question';
import { QuestionType } from '../types/QuestionType';
import { QuestionsList } from './QuestionsList';

interface QuestionsCardProps {
  getScore: GetScore;
  handleChange: UpdateAnswerHandler;
  language: string;
  questions: Array<Question>;
  questionType: QuestionType;
}

export function QuestionsCard(props: QuestionsCardProps): JSX.Element {
  const { getScore, handleChange, language, questions, questionType } = props;
  return (
    <Card>
      <CardHeader subheader={`${getScore(questionType)} points`} title={`${questionType} Questions`}/>
      <CardContent>
        {QuestionsList(questions, language, handleChange)}
      </CardContent>
    </Card>
  );
}
