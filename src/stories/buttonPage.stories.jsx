import React, { useState } from "react";
import Pagination from "../../dist/bundle.esm";
import "./buttonPage.module.css";

export default {
    title: "Pagination/Pagination",
    component: Pagination,
};

const Template = (args) => {
    const [currentPage, changePage] = useState(1);

    const paginate = (pageNumber) => {
        // Fetch the data that belogs to this new page.
        // Then change tho that page.
        changePage(pageNumber);
    };

    return (
        <div style={{textAlign: "center"}}>
            <article style={{ marginBottom: "15px"}}>Page: {currentPage}</article>
            <Pagination
                {...args}
                onChange={paginate}
                activePage={currentPage}
            />
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    totalPages: 10,
    startPage: 1,
    pageRangeDisplayed: 5,
    itemsCountPerPage: 6,
    totalItemsCount: 60,
};
