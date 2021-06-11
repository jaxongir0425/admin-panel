import React from 'react';
import "./SidebarStyle.css";
import {
    AssessmentOutlined, AttachMoney,
    DynamicFeed, LineStyle,
    MailOutline, MessageOutlined,
    PermIdentity, ReportOutlined,
    Storefront, Timeline,
    TrendingUp, WorkOutline
} from "@material-ui/icons";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <>

            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to="/" className="link">
                                <li className="sidebarListItem active">
                                    <LineStyle className="sidebarIcon"/>
                                    Home
                                </li>
                            </Link>
                            <Link to="/analytics" className="link">
                                <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Analytics
                                </li>
                            </Link>
                            <Link to="/sales" className="link">
                                <li className="sidebarListItem">
                                    <TrendingUp className="sidebarIcon"/>
                                    Sales
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <Link to="/users" className="link">
                                <li className="sidebarListItem">
                                    <PermIdentity className="sidebarIcon"/>
                                    Users
                                </li>
                            </Link>
                            <Link to="/products" className="link">
                                <li className="sidebarListItem">
                                    <Storefront className="sidebarIcon"/>
                                    Products
                                </li>
                            </Link>
                            <Link to="/transactions" className="link">
                                <li className="sidebarListItem">
                                    <AttachMoney className="sidebarIcon"/>
                                    Transactions
                                </li>
                            </Link>
                            <Link to="/reports" className="link">
                                <li className="sidebarListItem">
                                    <AssessmentOutlined className="sidebarIcon"/>
                                    Reports
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                            <Link to="/mail" className="link">
                                <li className="sidebarListItem">
                                    <MailOutline className="sidebarIcon"/>
                                    Mail
                                </li>
                            </Link>
                            <Link to="/feedback" className="link">
                                <li className="sidebarListItem">
                                    <DynamicFeed className="sidebarIcon"/>
                                    Feedback
                                </li>
                            </Link>
                            <Link to="/messages" className="link">
                                <li className="sidebarListItem">
                                    <MessageOutlined className="sidebarIcon"/>
                                    Messages
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <Link to="/manage" className="link">
                                <li className="sidebarListItem">
                                    <WorkOutline className="sidebarIcon"/>
                                    Manage
                                </li>
                            </Link>
                            <Link to="/analytics" className="link">
                                <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Analytics
                                </li>
                            </Link>
                            <Link to="/reports" className="link">
                                <li className="sidebarListItem">
                                    <ReportOutlined className="sidebarIcon"/>
                                    Reports
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Sidebar;