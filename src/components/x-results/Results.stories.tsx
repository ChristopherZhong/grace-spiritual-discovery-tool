import { Meta, Story } from '@storybook/react/types-6-0';
import { Results, ResultsProps } from './Results';
import { QuestionType } from '../../types/QuestionType';

export default {
  component: Results,
  title: 'Results',
} as Meta;

const Template: Story<ResultsProps> = (args) => <Results {...args}/>;

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
      type: QuestionType.Walk,
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
      type: QuestionType.Know,
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
      type: QuestionType.Serve,
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
      type: QuestionType.Relate,
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
      type: QuestionType.Share,
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
      type: QuestionType.Walk,
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
      type: QuestionType.Know,
    },
  ],
};
