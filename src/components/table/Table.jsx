import React from "react";
import "./table.css";
import table from "./pm.png";

const Table = () => {
    return (
        <div className="table">
            <center>
                <h2>Air Quality Index (AQI) Overview</h2>
                <img src={ table } alt='Logo' className='Table-image' />
            </center>
        </div>
    )
}

export default Table;