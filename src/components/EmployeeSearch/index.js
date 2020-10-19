import React from "react";
import "./style.css";

function EmployeeSearch(props) {
    return (
        <form className="search">
            <input
                placeholder="search for employee"
                id="searches"
                type="text"
                value={props.search}
                onChange={props.onchange}
            />
        </form>
    );
};

export default EmployeeSearch;