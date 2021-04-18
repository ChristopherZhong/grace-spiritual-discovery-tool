import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Choices, ChoicesProps } from './Choices';

export default {
  component: Choices,
  title: 'Choices',
} as Meta;

const Template: Story<ChoicesProps> = (args) => <Choices {...args} />;

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
    text: {},
    type: 'WALK',
  },
};

export const ChineseLanguage = Template.bind({});
ChineseLanguage.args = {
  ...Default.args,
};

export const MissingLanguage = Template.bind({});
MissingLanguage.args = {
  ...Default.args,
};
