import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.'

export default {
  title: 'organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Header',
};