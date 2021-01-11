import { Meta, Story } from '@storybook/react/types-6-0';
import { Question, QuestionProps } from './Question';
import * as ChoicesStories from '../x-choices/Choices.stories';

export default {
  component: Question,
  title: 'Question',
} as Meta;

const Template: Story<QuestionProps> = (args) => <Question {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleChange: () => {},
  language: 'en',
  question: {
    ...ChoicesStories.Default.args!.question!,
    text: {
      'en': 'English question text',
      'ch': 'Chinese question text',
    },
  },
};

export const ChineseLanguage = Template.bind({});
ChineseLanguage.args = {
  ...Default.args,
  language: 'ch',
};

export const MissingLanguage = Template.bind({});
MissingLanguage.args = {
  ...Default.args,
  language: 'sp',
};

export const Index2 = Template.bind({});
Index2.args = {
  ...Default.args,
  question: {
    ...Default.args.question!,
    index: 2,
  },
};
