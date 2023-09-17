import React from "react";

import Sidenavbar from '../Sidenavbar'
import Header from "../Header";
import './index.css'

const DummyFive = () => {
    return(
        <div className="app-container">
            <Sidenavbar />
            <div className="Home-app-container">
                <Header />
                <div className="Home-details-container">
                    <h1>DummyFive</h1>
                </div>
            </div>
        </div>
    )
}
export default DummyFive