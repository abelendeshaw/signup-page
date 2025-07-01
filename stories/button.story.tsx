import React from 'react';
import Button from '../app/components/button';

export default {
  title: 'Components/Button',
  component: Button,
};

interface TemplateProps {
    [key: string]: any;
}

import { StoryFn } from '@storybook/react';

interface ButtonProps {
    children?: React.ReactNode;
    [key: string]: any;
}

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Create Account',
};
