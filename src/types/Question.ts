import { Text } from './Text'
import { QuestionType } from './QuestionType'
import { Option } from './Option'

export interface Question {
  options: Option[]
  text: Text
  type: QuestionType
}
