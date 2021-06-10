import React from 'react';
import "./HomeStyle.css";
import Featured from "../../components/feature/Featured";

function Home() {
    return (
        <>

            <div className="home">
                <h1>Home</h1>
                <Featured/>
            </div>

        </>
    );
}

export default Home;