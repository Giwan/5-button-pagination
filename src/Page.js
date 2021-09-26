import React from "react";
import style from "./PageContainer.module.css";

const Page = ({ pageNumber = 1 }) => (
    <article className={style.pageStyle} data-highlight={pageNumber % 2}>
        Page {pageNumber}
    </article>
);

export default Page;
