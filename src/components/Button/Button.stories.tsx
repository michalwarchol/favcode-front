import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Button from './Button.view';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['fill', 'outline'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Fill = Template.bind({});
Fill.args = {
  children: 'Click Me!',
  variant: 'fill',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Click Me!',
  variant: 'outline',
};
