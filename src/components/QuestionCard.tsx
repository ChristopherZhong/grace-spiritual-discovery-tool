import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';
import { ParsedQuestion } from '../types/ParsedQuestion';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, FormControl, FormLabel } from '@material-ui/core';
import { getText } from '../types/Text';
import { Choices } from './Choices';

interface QuestionCardProps {
  handleChange: UpdateAnswerHandler;
  language: string;
  question: ParsedQuestion;
}

export function QuestionCard(props: QuestionCardProps): JSX.Element {
  const { handleChange, language, question } = props;
  return (
    <Card>
      <CardHeader title={`Question ${question.index}.`}/>
      <FormControl required>
        <CardContent>
          <FormLabel required>{getText(question.text, language)}</FormLabel>
        </CardContent>
        <CardActionArea>
          <CardActions>
            <Choices
              language={language}
              handleChange={handleChange}
              question={question}
            />
          </CardActions>
        </CardActionArea>
      </FormControl>
    </Card>
  );
}
