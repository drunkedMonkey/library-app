// src/components/Button/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button/Button';

// story configuration
export default {
  title: 'Components/Button', // Story title in storybook
  component: Button, // Component to be displayed in storybook
  argTypes: { // Arguments for the component
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Button>;

// Template for the stories
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Default story
export const Primary = Template.bind({});
Primary.args = {
  children: 'My Button',
  variant: 'primary',
  onClick: () => alert('Button clicked!'),
};

// Story with secondary variant
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'My Button',
  variant: 'secondary',
  onClick: () => alert('Button clicked!'),
};

// Story with disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'My Disabled Button',
  disabled: true,
  onClick: () => alert('Button clicked!'),
};

// Story with personalized styles
export const Personalized = Template.bind({});
Personalized.args = {
  children: 'My Personalized Button',
  color: '#7d2ae8',
  textColor: '#fff',
  fontSize: '1.2rem',
  onClick: () => alert('Button clicked!'),
};