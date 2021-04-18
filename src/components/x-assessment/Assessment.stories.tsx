import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Assessment, AssessmentProps } from './Assessment';

export default {
  component: Assessment,
  title: 'Assessment',
} as Meta;

const Template: Story<AssessmentProps> = (args) => <Assessment {...args} />;

export const Default = Template.bind({});
Default.args = {
  questions: [
    {
      answer: 1,
      choices: [
        {
          points: 1,
          text: {},
        },
        {
          points: 2,
          text: {},
        },
      ],
      index: 1,
      text: {},
      type: 'WALK',
    },
    {
      answer: 4,
      choices: [
        {
          points: 2,
          text: {},
        },
        {
          points: 4,
          text: {},
        },
        {
          points: 6,
          text: {},
        },
      ],
      index: 2,
      text: {},
      type: 'KNOW',
    },
    {
      answer: 2,
      choices: [
        {
          points: 1,
          text: {},
        },
        {
          points: 2,
          text: {},
        },
      ],
      index: 3,
      text: {},
      type: 'SERVE',
    },
    {
      answer: 1,
      choices: [
        {
          points: 1,
          text: {},
        },
        {
          points: 2,
          text: {},
        },
      ],
      index: 4,
      text: {},
      type: 'RELATE',
    },
    {
      answer: 1,
      choices: [
        {
          points: 1,
          text: {},
        },
        {
          points: 2,
          text: {},
        },
      ],
      index: 5,
      text: {},
      type: 'SHARE',
    },
    {
      answer: 2,
      choices: [
        {
          points: 2,
          text: {},
        },
        {
          points: 5,
          text: {},
        },
      ],
      index: 6,
      text: {},
      type: 'WALK',
    },
    {
      answer: 6,
      choices: [
        {
          points: 4,
          text: {},
        },
        {
          points: 6,
          text: {},
        },
      ],
      index: 7,
      text: {},
      type: 'KNOW',
    },
  ],
};
