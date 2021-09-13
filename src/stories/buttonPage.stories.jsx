import React from 'react';

import TestFunction from '../../dist/bundle.esm';

export default {
  title: 'Test/TestFunction',
  component: TestFunction,
};

const Template = (args) => <TestFunction {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
