import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Question } from '../types/Question';
import { QuestionType } from '../types/QuestionType';
import { QuestionsList } from './QuestionsList';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';
import { GetScore } from '../types/GetScore';

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
