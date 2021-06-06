import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LanguageList } from './LanguageList';

export default {
  component: LanguageList,
  title: 'LanguageList',
} as Meta;

const Template: Story = (args) => <LanguageList {...args} />;

export const Default = Template.bind({});
Default.args = {};
