import { Question } from './Question';

export interface ParsedQuestion extends Question {
  answer: number;
  index: number;
}
