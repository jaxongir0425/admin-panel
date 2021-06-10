import React from 'react';
import "./HomeStyle.css";
import Featured from "../../components/feature/Featured";
import Chart from "../../components/chart/Chart";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
    return (
        <>

            <div className="home">
                <Featured/>
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                <div className="homeWidgets">
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
            </div>

        </>
    );
}

export default Home;