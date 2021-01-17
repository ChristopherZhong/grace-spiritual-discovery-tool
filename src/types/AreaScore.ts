import { QuestionType } from './QuestionType';
import { Question } from './Question';

export interface AreaScore {
  readonly area: QuestionType
  current: number
  total: number
}

export function computeScores(questions: ReadonlyArray<Question>): ReadonlyMap<QuestionType, AreaScore> {
  const map = new Map<QuestionType, AreaScore>();
  questions.forEach((question) => {
    const score = map.get(question.type) ?? { area: question.type, current: 0, total: 0 };
    score.current += question.answer;
    score.total += question.choices.reduce((max, choice) => Math.max(max, choice.points), 0);
    map.set(question.type, score);
  });
  return map;
}
