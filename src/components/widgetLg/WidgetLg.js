import React from 'react';
import "./WidgetLgStyle.css";
import avatar from "../../image/avatar.png";

function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>

    }

    return (
        <>

            <div className="widgetLg">
                <h2 className="widgetLgTitle">Latest transactions</h2>
                <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Custom</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={avatar} alt="Avatar Image" className="widgetLgUserImg"/>
                            <span className="widgetLgName">Jaxongir Abdusalomov</span>
                        </td>
                        <td className="widgetLgDate">10 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={avatar} alt="Avatar Image" className="widgetLgUserImg"/>
                            <span className="widgetLgName">Jaxongir Abdusalomov</span>
                        </td>
                        <td className="widgetLgDate">10 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Pending"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={avatar} alt="Avatar Image" className="widgetLgUserImg"/>
                            <span className="widgetLgName">Jaxongir Abdusalomov</span>
                        </td>
                        <td className="widgetLgDate">10 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={avatar} alt="Avatar Image" className="widgetLgUserImg"/>
                            <span className="widgetLgName">Jaxongir Abdusalomov</span>
                        </td>
                        <td className="widgetLgDate">10 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    );
}

export default WidgetLg;