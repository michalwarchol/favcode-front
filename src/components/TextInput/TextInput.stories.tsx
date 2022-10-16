import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import TextInput from './TextInput.view';

export default {
  title: 'components/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
