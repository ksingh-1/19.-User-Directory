import React, { Component } from "react";
import employeeData from "../employees.json";
import EmployeeRow from "../EmployeeRow";
import EmployeeSearch from "../EmployeeSearch";
import "./style.css";


class EmployeeInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employeeData,
            direction: {
                name: "Asc",
                number: "Asc",
                email: "Asc"
            },
            search: ""
        }
        this.sortBy = this.sortBy.bind(this);
    };

    sortBy(key) {
        console.log(key);
        console.log(this.state.direction);
        this.setState({
            employeeData: this.state.employeeData.sort((a, b) =>
                (this.state.direction[key] === "Asc"
                    ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
                )),
            direction: {
                ...this.state.direction,
                [key]: this.state.direction[key] === "Asc" ? "Desc" : "Asc"
            }
        });
    };

    onchange = event => {
        this.setState({ search: event.target.value });
    };

    render() {
        const filteredData = this.state.employeeData.filter(
            employee => {
                return (
                    employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                )
            }
        );
        return (
            <main>
                <div>
                    <EmployeeSearch
                        search={this.state.search}
                        onchange={this.onchange}
                    />
                </div>
                <table>
                    <thead className="tableHead">
                        <tr>
                            <th className="photo">Photo</th>
                            <th>
                                <button className="btn btn-dark"
                                    onClick={() => this.sortBy("name")}
                                >
                                    Name&nbsp;
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-dark"
                                    onClick={() => this.sortBy("number")}
                                >
                                    Phone Number&nbsp;
                                </button>
                            </th>
                            <th>
                                <button className="btn btn-dark"
                                    onClick={() => this.sortBy("email")}
                                >
                                    Email&nbsp;
                                </button>
                            </th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(employee => (
                            <EmployeeRow
                                employeeData={this.state.employeeData}
                                sortBy={this.sortBy}
                                id={employee.id}
                                key={employee.id}
                                photo={employee.photo}
                                name={employee.name}
                                number={employee.number}
                                email={employee.email}
                                dob={employee.dob}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        );
    };
}

export default EmployeeInfo;
