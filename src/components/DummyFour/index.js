import React from "react";

import Sidenavbar from '../Sidenavbar'
import Header from "../Header";
import './index.css'

const DummyFour = () => {
    return(
        <div className="app-container">
            <Sidenavbar />
            <div className="Home-app-container">
                <Header />
                <div className="Home-details-container">
                    <h1>DummyFour</h1>
                </div>
            </div>
        </div>
    )
}
export default DummyFour