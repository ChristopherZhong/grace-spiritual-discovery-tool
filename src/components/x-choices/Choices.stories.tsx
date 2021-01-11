import { Meta, Story } from '@storybook/react/types-6-0';
import { Choices, ChoicesProps } from './Choices';
import { QuestionType } from '../../types/QuestionType';

export default {
  component: Choices,
  title: 'Choices',
} as Meta;

const Template: Story<ChoicesProps> = (args) => <Choices {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleChange: undefined,
  language: 'en',
  question: {
    answer: 0,
    choices: [],
    index: 1,
    text: {
      'en': 'english text',
    },
    type: QuestionType.Walk,
  },
};
