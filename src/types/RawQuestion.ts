import { Text } from './Text';
import { QuestionType } from './QuestionType';
import { Choice } from './Choice';
import questionsJson from '../questions.json';
import { Question } from './Question';

export interface RawQuestion {
  choices: Choice[]
  text: Text
  type: QuestionType
}

function parse(value: RawQuestion, index: number): Question {
  console.debug(`>>> Questions::() : index=${index}, value=${JSON.stringify(value)}`);
  return {
    answer: 0,
    choices: value.choices,
    index: index + 1,
    text: value.text,
    type: value.type,
  };
}

export function loadQuestions(): Array<Question> {
  const rawQuestions = questionsJson as Array<RawQuestion>;
  console.log(`Loading ${rawQuestions.length} questions ...`);
  const parsedQuestions = rawQuestions.map(parse);
  console.debug(`>>> Questions::() : parsedQuestions=${JSON.stringify(parsedQuestions)}`);
  return parsedQuestions;
}
