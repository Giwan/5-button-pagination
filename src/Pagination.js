import React from "react";
import style from "./Pagination.module.css";
import { createButtons } from "./paginationHelpers";

const createButtonsCurry = function (setPage, pageNumber, totalPages) {
    return function (buttonsArray) {
        return createButtons(buttonsArray, setPage, pageNumber, totalPages);
    };
};

const Pagination = ({
    pageNumber,
    prevButtons,
    nextButtons,
    setPage,
    totalPages,
}) => {
    const buttonsCurry = createButtonsCurry(setPage, pageNumber, totalPages);

    return (
        <div className={style.pageButtonNumbers}>
            <div className={style.utilButtons}>
                <PageButtons {...{ buttons: prevButtons }} />
                <PageButtons buttons={buttonsCurry([-4, -3, -2, -1])} />
                <button className={style.pageNumberStyle}>{pageNumber}</button>
                <PageButtons buttons={buttonsCurry([1, 2, 3, 4])} />
                <PageButtons {...{ buttons: nextButtons }} />
            </div>
        </div>
    );
};

export default Pagination;

/**
 * Create a button element based on the provided array of buttons.
 */
const PageButtons = ({ buttons }) =>
    buttons?.map((b) => {
        if (!b) return null;
        const { label, action } = b;

        return (
            <button key={label} onClick={action} className={style.button}>
                {convertLabel(label)}
            </button>
        );
    });

/**
 * Helper function to use the HTML icons
 * Used for the previous and next buttons.
 */
const convertLabel = (label) =>
    typeof label === "number" ? (
        label
    ) : (
        <span dangerouslySetInnerHTML={{ __html: label }} />
    );
