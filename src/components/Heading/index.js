import React from "react";
import "./style.css";
import EmployeeInfo from "../EmployeeInfo";

const Heading = (props) => {
    return (
        <div>
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on buttons to filter by heading or use the search box to narrow your results.</p>
            </div>
            <div className="container">
                <EmployeeInfo />
            </div>
        </div>
    )
};

export default Heading;