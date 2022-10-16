import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Button from './TextInput.view';

export default {
  title: 'components/TextInput',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
