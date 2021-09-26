import React from "react";
import style from "./Pagination.module.css";

const data = [1,2,3,4];

const Pagination = () => {
    return (<div>
        <h1>Pagination!!</h1>
        {data.map((item) => <button className={style.button} key={item}>{item}</button>)}
    </div>);
}

export default Pagination;
