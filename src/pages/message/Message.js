import React from 'react';
import "./MessageStyle.css";
import messages from "../../image/messages.png";

function Message() {
    return (
        <>

            <div className="message">
                <h1>Message Page</h1>
                <img src={messages} alt="Messages Image" className="messageImg"/>
            </div>

        </>
    );
}

export default Message;