import { ParsedQuestion } from './ParsedQuestion';

export interface UpdateAnswerHandler {
  (question: ParsedQuestion, value: number): void;
}
