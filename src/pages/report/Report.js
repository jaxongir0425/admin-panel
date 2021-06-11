import React from 'react';
import "./ReportStyle.css";
import report from "../../image/report.png";

function Report() {
    return (
        <>

            <div className="report">
                <h1>Report Page</h1>
                <img src={report} alt="Report Image" className="reportImg"/>
            </div>

        </>
    );
}

export default Report;