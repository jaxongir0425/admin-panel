import React from 'react';
import "./FeedbackStyle.css";
import feedback from "../../image/feedback.png";

function Feedback() {
    return (
        <>

            <div className="feedback">
                <h1>Feedback Page</h1>
                <img src={feedback} alt="Feedback Image" className="feedbackImg"/>
            </div>

        </>
    );
}

export default Feedback;