import questionsJson from '../questions.json';
import { Question } from '../types/Question';
import { QuestionType } from '../types/QuestionType';
import { Choices } from './Choices';
import { FormControl, FormLabel, List, ListItem } from '@material-ui/core';
import { getText } from '../types/Text';

const questions = questionsJson as Question[];

function createQuestion(question: Question, index: number, language: string): JSX.Element {
  return (
    <ListItem key={index}>
      <FormControl>
        <FormLabel>{getText(question.text, language)}</FormLabel>
        {Choices(question.choices, language)}
      </FormControl>
    </ListItem>
  );
}

function createQuestions(questions: Question[], language: string): JSX.Element {
  const mapQuestion = (question: Question, index: number) => createQuestion(question, index, language);
  return (
    <List component='ol'>
      {questions.map(mapQuestion)}
    </List>
  );
}

function createQuestionsBy(type: QuestionType): JSX.Element {
  const filter: Question[] = questions.filter(value => value.type === type);
  return (
    <div>
      <p>{type}</p>
      <div>{createQuestions(filter, 'en')}</div>
    </div>
  );
}

const KnowQuestions = () => createQuestionsBy(QuestionType.Know);
const WalkQuestions = () => createQuestionsBy(QuestionType.Walk);
const RelateQuestions = () => createQuestionsBy(QuestionType.Relate);
const ServeQuestions = () => createQuestionsBy(QuestionType.Serve);
const ShareQuestions = () => createQuestionsBy(QuestionType.Share);

export function Questions(): JSX.Element {
  return (
    <div>
      <p>Here is a list of questions</p>

      <KnowQuestions/>
      <WalkQuestions/>
      <RelateQuestions/>
      <ServeQuestions/>
      <ShareQuestions/>
    </div>
  );
}
