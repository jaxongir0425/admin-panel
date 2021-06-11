import React from 'react';
import "./SalesStyle.css";
import sales from "../../image/sales.png";

function Sales() {
    return (
        <>

            <div className="sales">
                <h1>Sales Page</h1>
                <img src={sales} alt="" className="salesImg"/>
            </div>

        </>
    );
}

export default Sales;