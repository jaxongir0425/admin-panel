import React from 'react';
import "./TransactionStyle.css";
import transaction from "../../image/transaction.png";

function Transaction() {
    return (
        <>

            <div className="transaction">
                <h1>Transaction Page</h1>
                <img src={transaction} alt="Transaction Image" className="transactionImg"/>
            </div>

        </>
    );
}

export default Transaction;