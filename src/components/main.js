  
// Import all components and the api.js to access axios for the API call
import React, { Component } from "react";
import Navbar from "./NavBar";
import Api from "../utils/API";
import Table from "./employeeCardTable";

class Main extends Component {
  // Add a State property to update page inside component where state is stored.
  state = {
    result: [],

    search: "",

    currentPage: ""
  }
  // componentDidMount() is invoked immediately after a component is mounted.
  componentDidMount() {
    this.searchEmployee()
  }
  searchEmployee = () => {
    //API call to get all of the users
    Api.getUsers()
      .then(res => {
        this.setState({ result: res.data.results })
      })
      .catch(err => console.log(err));
  }
  // function to set the state
  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  };

  // Inputs are event driven, get the value of a name to be filtered
  handleInputChange = (event) => {
    // update the state of the page by calling it here
    this.handlePageChange(event.target.value)
  }


  // calling the sortByFirst() function, created in the Table component
  sortByFirst = () => {
    let firstName = this.state.result.sort(compare)
    function compare(a, b) {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    //sorted ascending or descending
    this.setState({ result: firstName })
  }
  // calling the sortByLast() function, created in the Table component
  sortByLast = () => {
    let lastName = this.state.result.sort(compare)
    function compare(a, b) {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    // sorted ascending or descending
    this.setState({ result: lastName });
  };

  render() {
    if (this.state.result) {
      //returns some JSX here
      return (
        <div className="container-sm">
          <Navbar
            handlePageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
            handleInputChange={this.handleInputChange}
          />
          <Table
            results={this.state.result}
            handlePageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
            sortByFirst={this.sortByFirst}
            sortByLast={this.sortByLast}
          />
        </div>
      )
    }
    else {
      return <div>No Results</div>
    }
  };

};

export default Main;