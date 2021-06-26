import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { StageInfo, StageInfoProps } from './StageInfo';

export default {
  component: StageInfo,
  title: 'StageInfo',
} as Meta;

const Template: Story<StageInfoProps> = (args) => <StageInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  stage: {
    description: {
      en: 'English description',
      zh: 'Chinese description',
    },
    id: {
      en: 'English ID',
      zh: 'Chinese ID',
    },
    name: {
      en: 'English name',
      zh: 'Chinese name',
    },
    range: {
      max: 4,
      min: 1,
    },
  },
};
