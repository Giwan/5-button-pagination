import React from "react";
import style from "./Pagination.module.css";
import Pagination from "./Pagination";

const Main = ({
    totalItemsCount,
    itemsCountPerPage,
    startPage,
    activePage,
    onChange,
}) => {
    const totalPages = totalItemsCount / itemsCountPerPage;

    const firstPage = () => onChange(startPage);
    const lastPage = () => onChange(totalPages);

    const prevPage = () => activePage > 1 && onChange(activePage - 1);
    const nextPage = () => activePage < totalPages && onChange(activePage + 1);

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
            <Pagination
                pageNumber={activePage}
                prevButtons={prevButtons}
                nextButtons={nextButtons}
                setPage={onChange}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Main;
