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
            <ul className={style.utilButtons}>
                <PageButtons {...{ buttons: prevButtons }} />
                <PageButtons buttons={buttonsCurry([-4, -3, -2, -1])} />
                <li className={style.li}>
                    <a href="#" className={style.button +" " +style.pageNumberStyle}>{pageNumber}</a>
                </li>
                <PageButtons buttons={buttonsCurry([1, 2, 3, 4])} />
                <PageButtons {...{ buttons: nextButtons }} />
            </ul>
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
            <li key={label} onClick={action} className={style.li}>
                <a className={style.button} href="#">{convertLabel(label)}</a>
            </li>
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
