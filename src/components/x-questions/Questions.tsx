import { Grid } from '@material-ui/core';
import { Question as IQuestion } from '../../types/Question';
import { Question } from '../x-question/Question';
import { UpdateAnswerHandler } from '../../types/UpdateAnswerHandler';

interface QuestionsProps {
  handleChange: UpdateAnswerHandler;
  language: string;
  questions: Array<IQuestion>;
}

export function Questions(props: QuestionsProps): JSX.Element {
  const { handleChange, language, questions } = props;
  return (
    <Grid
      alignItems='stretch'
      container
      direction='column'
      justify='center'
      spacing={2}
    >
      {questions.map((question) =>
        <Grid item key={question.index} zeroMinWidth>
          <Question
            handleChange={handleChange}
            key={question.index}
            language={language}
            question={question}
          />
        </Grid>)}
    </Grid>
  );
}
