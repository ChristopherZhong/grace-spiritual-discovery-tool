import { GetScore } from '../types/GetScore';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';
import { ParsedQuestion } from '../types/ParsedQuestion';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, FormControl, FormLabel } from '@material-ui/core';
import { getText } from '../types/Text';
import { Choices } from './Choices';

interface QuestionCardProps {
  getScore: GetScore;
  handleChange: UpdateAnswerHandler;
  language: string;
  question: ParsedQuestion;
}

export function QuestionCard(props: QuestionCardProps): JSX.Element {
  const { getScore, handleChange, language, question } = props;
  return (
    <Card>
      <CardHeader title={`Question ${question.index}.`}/>
      <FormControl required>
        <CardContent>
          <FormLabel required>{getText(question.question.text, language)}</FormLabel>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Choices
              choices={question.question.choices}
              language={language}
              handleChange={handleChange}
              questionType={question.question.type}
              questionIndex={question.index}
            />
          </CardActions>
        </CardActionArea>
      </FormControl>
    </Card>
  );
}
