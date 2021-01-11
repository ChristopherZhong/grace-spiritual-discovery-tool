import { ChoiceProps, ChoiceRadio } from './ChoiceRadio';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: ChoiceRadio,
  title: 'Choice',
} as Meta;

const Template: Story<ChoiceProps> = (args) => <ChoiceRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  choice: {
    points: 1,
    text: {
      'en': 'English text',
      'ch': 'Chinese text',
    },
  },
  index: 1,
  language: 'en',
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

export const LabelPlacementBottom = Template.bind({});
LabelPlacementBottom.args = {
  ...Default.args,
  labelPlacement: 'bottom',
};
