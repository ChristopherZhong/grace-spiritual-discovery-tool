import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TopBar } from './TopBar';

export default {
  component: TopBar,
  title: 'TopBar',
} as Meta;

const Template: Story = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
