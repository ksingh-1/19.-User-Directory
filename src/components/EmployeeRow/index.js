import React from "react";
import "./style.css";

function EmployeeRow(props) {
    const empImage = (id) => {
        switch (id) {
            case 1: return require("./Images/");
            case 2: return require("./Images/");
            case 3: return require("./Images/");
            case 4: return require("./Images/");
            case 5: return require("./Images/");
            case 6: return require("./Images/");
            case 7: return require("./Images/");
            case 8: return require("./Images/");
            case 9: return require("./Images/");
            case 10: return require("./Images/");
            case 11: return require("./Images/");
            case 12: return require("./Images/");
            case 13: return require("./Images/");
            case 14: return require("./Images/");
            case 15: return require("./Images/");
            case 16: return require("./Images/");
            case 17: return require("./Images/");
            case 18: return require("./Images/");
            case 19: return require("./Images/");
            case 20: return require("./Images/");
            default: return "https://via.placeholder.com/150";
        }
    }

    return (
        <tr className="EmployeeRow">
            <td>
                <img src={empImage(props.id)} alt={props.name} />
            </td>
            <td>{props.name}</td>
            <td>{props.number}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );

};

export default EmployeeRow;