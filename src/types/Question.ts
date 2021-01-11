import { RawQuestion } from './RawQuestion';

export interface Question extends RawQuestion {
  answer: number;
  index: number;
}
