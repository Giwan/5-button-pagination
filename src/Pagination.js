import React from "react";
import style from "./Pagination.module.css";
import { createButtons } from "./paginationHelpers";

const Pagination = ({
    pageNumber,
    prevButtons,
    nextButtons,
    setPage,
    totalPages,
}) => (
    <div className={style.pageButtonNumbers}>
        <div className={style.pageButtonNumbers}>
            <div>
                <PageButtons {...{ buttons: prevButtons }} />
            </div>
            <PageButtons
                buttons={createButtons(
                    [-4, -3, -2, -1],
                    setPage,
                    pageNumber,
                    totalPages
                )}
            />
            <span className={style.pageNumberStyle}>{pageNumber}</span>
            <PageButtons
                buttons={createButtons(
                    [1, 2, 3, 4],
                    setPage,
                    pageNumber,
                    totalPages
                )}
            />
        </div>
        <div>
            <PageButtons {...{ buttons: nextButtons }} />
        </div>
    </div>
);

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
