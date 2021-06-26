import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Question, QuestionProps } from './Question';

export default {
  component: Question,
  title: 'Question',
} as Meta;

const Template: Story<QuestionProps> = (args) => <Question {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleChange: () => {
    // do nothing
  },
  question: {
    answer: 0,
    choices: [
      {
        points: 1,
        text: {
          en: 'English (1)',
          zh: 'Chinese (1)',
        },
      },
      {
        points: 2,
        text: {
          en: 'English (2)',
          zh: 'Chinese (2)',
        },
      },
      {
        points: 3,
        text: {
          en: 'English (3)',
          zh: 'Chinese (3)',
        },
      },
    ],
    index: 1,
    text: {
      en: 'English question text',
      zh: 'Chinese question text',
    },
    type: 'WALK',
  },
};

export const Index2 = Template.bind({});
Index2.args = {
  ...Default.args,
  question: {
    ...Default.args.question!,
    index: 2,
  },
};
