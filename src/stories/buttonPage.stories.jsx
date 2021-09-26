import React, { useState } from "react";

import Pagination from "../../dist/bundle.esm";

export default {
    title: "Pagination/Pagination",
    component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    totalPages: 10,
    startPage: 1,
};
