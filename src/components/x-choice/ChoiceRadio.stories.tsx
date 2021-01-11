import { ChoiceProps, ChoiceRadio } from './ChoiceRadio';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: ChoiceRadio,
  title: 'Choice',
} as Meta;

const Template: Story<ChoiceProps> = (args) => <ChoiceRadio {...args} />;

export const Default = Template.bind({})
Default.args = {
  choice: {
    points: 1,
    text: {
      'en': 'English text',
    }
  },
  index: 1,
  language: 'en',
}
