import React from 'react';
import { EmailAssessmentButton, EmailAssessmentButtonProps } from './EmailAssessmentButton';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: EmailAssessmentButton,
  title: 'EmailAssessmentButton',
} as Meta;

const Template: Story<EmailAssessmentButtonProps> = (args) => <EmailAssessmentButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
