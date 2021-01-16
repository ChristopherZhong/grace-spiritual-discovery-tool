import { Meta, Story } from '@storybook/react/types-6-0';
import { Questions, QuestionsProps } from './Questions';
import * as QuestionStories from '../x-question/Question.stories';

export default {
  component: Questions,
  title: 'Questions',
} as Meta;

const Template: Story<QuestionsProps> = (args) => <Questions {...args}/>;

export const Default = Template.bind({});
Default.args = {
  handleChange: () => {},
  language: 'en',
  questions: [
    {
      ...QuestionStories.Default.args!.question!,
    },
    {
      ...QuestionStories.Default.args!.question!,
      index: 2,
    },
    {
      ...QuestionStories.Default.args!.question!,
      index: 3,
    },
  ],
};
