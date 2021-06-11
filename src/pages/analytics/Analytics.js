import React from 'react';
import "./AnalyticsStyle.css";
import analytics from "../../image/analytics.png";

function Analytics() {
    return (
        <>

            <div className="analytics">
                <h1>Analytics Page</h1>
                <img src={analytics} alt="Analytics Image" className="analyticsImg"/>
            </div>

        </>
    );
}

export default Analytics;