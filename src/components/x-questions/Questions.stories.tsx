import { Meta, Story } from '@storybook/react/types-6-0';
import { Questions, QuestionsProps } from './Questions';
import { QuestionType } from '../../types/QuestionType';

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
      answer: 0,
      choices: [
        {
          points: 1,
          text: {
            'en': 'English (1.1)',
            'zh': 'Chinese (1.1)',
          },
        },
        {
          points: 2,
          text: {
            'en': 'English (1.2)',
            'zh': 'Chinese (1.2)',
          },
        },
        {
          points: 3,
          text: {
            'en': 'English (1.3)',
            'zh': 'Chinese (1.3)',
          },
        },
      ],
      index: 1,
      text: {
        'en': 'English question (1) text',
        'zh': 'Chinese question (1) text',
      },
      type: QuestionType.Walk,
    },
    {
      answer: 0,
      choices: [
        {
          points: 1,
          text: {
            'en': 'English (2.1)',
            'zh': 'Chinese (2.1)',
          },
        },
        {
          points: 2,
          text: {
            'en': 'English (2.2)',
            'zh': 'Chinese (2.2)',
          },
        },
        {
          points: 3,
          text: {
            'en': 'English (2.3)',
            'zh': 'Chinese (2.3)',
          },
        },
      ],
      index: 2,
      text: {
        'en': 'English question (2) text',
        'zh': 'Chinese question (2) text',
      },
      type: QuestionType.Know,
    },
    {
      answer: 0,
      choices: [
        {
          points: 1,
          text: {
            'en': 'English (3.1)',
            'zh': 'Chinese (3.1)',
          },
        },
        {
          points: 2,
          text: {
            'en': 'English (3.2)',
            'zh': 'Chinese (3.2)',
          },
        },
        {
          points: 3,
          text: {
            'en': 'English (3.3)',
            'zh': 'Chinese (3.3)',
          },
        },
      ],
      index: 3,
      text: {
        'en': 'English question (3) text',
        'zh': 'Chinese question (3) text',
      },
      type: QuestionType.Serve,
    },
  ],
};

export const ChineseLanguage = Template.bind({});
ChineseLanguage.args = {
  ...Default.args,
  language: 'zh',
};

export const MissingLanguage = Template.bind({});
MissingLanguage.args = {
  ...Default.args,
  language: 'es',
};
