import { Question } from './Question';

export interface ParsedQuestion {
  answer: number;
  index: number;
  question: Question;
}
