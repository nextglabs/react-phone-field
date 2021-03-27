import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReactPhone, ReactPhoneProps } from '../src';

const meta: Meta = {
  title: 'Compatibility/Material UI',
  component: ReactPhone,
};

export default meta;

const Template: Story<ReactPhoneProps> = args => <ReactPhone {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
