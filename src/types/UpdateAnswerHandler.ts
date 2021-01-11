import { Question } from './Question';

export interface UpdateAnswerHandler {
  (question: Question, value: number): void;
}
