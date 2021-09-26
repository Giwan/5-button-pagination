import React, { useState } from "react";
import style from "./Pagination.module.css";
import Page from "./Page";
import Pagination from "./Pagination";

const data = [1, 2, 3, 4];

const Main = ({ totalPages, startPage }) => {
    const [pageNumber, setPage] = useState(startPage);
    const changePage = (e) => setPage((_currentPage) => _currentPage + 1);

    const firstPage = () => setPage(1);
    const lastPage = () => setPage(totalPages);

    const prevPage = () => pageNumber > 1 && setPage(pageNumber - 1);
    const nextPage = () => pageNumber < totalPages && setPage(pageNumber + 1);

    const prevButtons = [
        {
            label: "&laquo",
            action: firstPage,
        },
        {
            label: "&lsaquo;",
            action: prevPage,
        },
    ];
    const nextButtons = [
        {
            label: "&rsaquo;",
            action: nextPage,
        },
        {
            label: "&raquo;",
            action: lastPage,
        },
    ];

    return (
        <div className={style.pageContainerStyle}>
            <div>
                Page {pageNumber} of {totalPages}
            </div>
            <Page pageNumber={pageNumber} />
            {/* {data.map((item) => <button className={style.button} key={item} onClick={changePage}>{item}</button>)} */}
            <Pagination
                pageNumber={pageNumber}
                prevButtons={prevButtons}
                nextButtons={nextButtons}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Main;
