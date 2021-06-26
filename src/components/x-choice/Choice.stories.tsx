import React from 'react';
import { Choice, ChoiceProps } from './Choice';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: Choice,
  title: 'Choice',
} as Meta;

const Template: Story<ChoiceProps> = (args) => <Choice {...args} />;

export const Default = Template.bind({});
Default.args = {
  choice: {
    points: 1,
    text: {
      en: 'English text',
      zh: 'Chinese text',
    },
  },
  index: 1,
};
