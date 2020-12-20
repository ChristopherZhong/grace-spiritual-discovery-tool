import { Text } from './Text'
import { QuestionType } from './QuestionType'
import { Choice } from './Choice'

export interface Question {
  choices: Choice[]
  text: Text
  type: QuestionType
}
