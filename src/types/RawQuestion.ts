import { Text } from './Text';
import { QuestionType } from './QuestionType';
import { Choice } from './Choice';
import questionsJson from '../questions.json';
import { ParsedQuestion } from './ParsedQuestion';

const questions = questionsJson as Array<RawQuestion>;

export interface RawQuestion {
  choices: Choice[]
  text: Text
  type: QuestionType
}

function parse(value: RawQuestion, index: number): ParsedQuestion {
  console.debug(`>>> Questions::() : index=${index}, value=${JSON.stringify(value)}`);
  return {
    answer: 0,
    choices: value.choices,
    index: index + 1,
    text: value.text,
    type: value.type,
  };
}

export function loadQuestions(): Array<ParsedQuestion> {
  console.log(`Loading ${questions.length} questions ...`);
  const parsedQuestions = questions.map(parse);
  console.debug(`>>> Questions::() : parsedQuestions=${JSON.stringify(parsedQuestions)}`);
  return parsedQuestions;
}
