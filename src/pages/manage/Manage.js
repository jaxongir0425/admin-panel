import React from 'react';
import "./ManageStyle.css";
import manage from "../../image/manage.png";

function Manage() {
    return (
        <>

            <div className="manage">
                <h1>Manage Page</h1>
                <img src={manage} alt="Manage Image" className="manageImg"/>
            </div>

        </>
    );
}

export default Manage;