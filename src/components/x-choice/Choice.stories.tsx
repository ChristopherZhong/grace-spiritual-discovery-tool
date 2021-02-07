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
      'en': 'English text',
      'zh': 'Chinese text',
    },
  },
  index: 1,
  language: 'en',
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
