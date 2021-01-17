import { QuestionType } from './QuestionType';
import { Question } from './Question';

export interface AreaScore {
  readonly area: QuestionType
  readonly current: number
  readonly total: number
}

export function computeScores(questions: ReadonlyArray<Question>): ReadonlyArray<AreaScore> {
  const map = new Map<QuestionType, AreaScore>();
  questions.forEach((question) => {
    let score = map.get(question.type) ?? { area: question.type, current: 0, total: 0 };
    score = {
      area: score.area,
      current: score.current + question.answer,
      total: score.total + question.choices.reduce((max, choice) => Math.max(max, choice.points), 0),
    };
    map.set(question.type, score);
  });
  return Array.from(map.values());
}
