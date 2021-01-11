import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';
import { Question as IQuestion } from '../../types/Question';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, FormControl, FormLabel } from '@material-ui/core';
import { getText } from '../../types/Text';
import { Choices } from '../x-choices/Choices';

export interface QuestionProps {
  handleChange: UpdateAnswerHandler;
  language: string;
  question: IQuestion;
}

export function Question(props: QuestionProps): JSX.Element {
  const { handleChange, language, question } = props;
  const [text, found] = getText(question.text, language);
  return (
    <Card>
      <CardHeader title={`Question ${question.index}.`}/>
      <FormControl required>
        <CardContent>
          <FormLabel required>{found ? '' : '*'}{text}</FormLabel>
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
