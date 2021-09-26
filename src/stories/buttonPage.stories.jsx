import React, {useState} from 'react';

import Pagination from '../../dist/bundle.esm';

export default {
  title: 'Test/TestFunction',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
