import React from 'react';
import "./TopbarStyle.css";
import {Language, NotificationsNone, Settings} from "@material-ui/icons";
import avatar from "../../image/avatar.png";

function Topbar() {
    return (
        <>

            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">Admin Panel</span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBag">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language/>
                            <span className="topIconBag">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Settings/>
                        </div>
                        <img src={avatar} alt="Top Avatar Image" className="topAvatar"/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Topbar;