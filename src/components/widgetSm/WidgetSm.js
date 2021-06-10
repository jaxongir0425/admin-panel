import React from 'react';
import "./WidgetSmStyle.css";
import widgetImg from "../../image/widgetImg.png";
import widgetImg2 from "../../image/widgetImg2.png";
import widgetImg3 from "../../image/widgetImg3.png";
import widgetImg4 from "../../image/widgetImg4.png";
import widgetImg5 from "../../image/widgetImg5.png";
import {Visibility} from "@material-ui/icons";

function WidgetSm() {
    return (
        <>

            <div className="widgetSm">
                <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    <li className="widgetSmListItem">
                        <img src={widgetImg} alt="Widget Image" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Jaxongir Abdusalomov</span>
                            <span className="widgetSmUserTitle">Full Stack Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/> Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src={widgetImg2} alt="Widget Image" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Muhammadsodiq A.</span>
                            <span className="widgetSmUserTitle">Dev Ops</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/> Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src={widgetImg3} alt="Widget Image" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Tohirbek Soliyev</span>
                            <span className="widgetSmUserTitle">Backend Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/> Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src={widgetImg4} alt="Widget Image" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Umidjon To'ychiyev</span>
                            <span className="widgetSmUserTitle">Frontend Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/> Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src={widgetImg5} alt="Widget Image" className="widgetSmImg"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Doniyor Asqaraliyev</span>
                            <span className="widgetSmUserTitle">Frontend Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/> Display
                        </button>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default WidgetSm;