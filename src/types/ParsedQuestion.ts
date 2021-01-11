import { RawQuestion } from './RawQuestion';

export interface ParsedQuestion extends RawQuestion {
  answer: number;
  index: number;
}
