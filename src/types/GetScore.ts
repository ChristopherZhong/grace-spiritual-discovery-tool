import { QuestionType } from './QuestionType';

export interface GetScore {
  (questionType: QuestionType): number;
}
