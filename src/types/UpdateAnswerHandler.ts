import { QuestionType } from './QuestionType';

export interface UpdateAnswerHandler {
  (questionType: QuestionType, questionIndex: number, value: number): void;
}
