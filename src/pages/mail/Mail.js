import React from 'react';
import "./MailStyle.css";
import mail from "../../image/mail.png";

function Mail() {
    return (
        <>

            <div className="mail">
                <h1>Mail Page</h1>
                <img src={mail} alt="Mail Image" className="mailImg"/>
            </div>

        </>
    );
}

export default Mail;