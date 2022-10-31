import React, { Component } from "react";
import ContestService from "../../service/contest.service";
import ContestForm from "./ContestForm";

// component to add contest.
// change the fields if necessary.
export default class AddContest extends Component {
  state = {
    name: "",
    capacity: "",
    registration_allowed: true,
    status: false,
    message: "",
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleCapacityChange = (event) => {
    this.setState({
      capacity: event.target.value,
    });
  };

  handleRegistrationAllowedChange = (event) => {
    this.setState({
      registration_allowed: event.target.checked,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const contest = {
      name: this.state.name,
      capacity: this.state.capacity,
      date : "2022-12-10",
      registrationAllowed: this.state.registration_allowed,
    };

    ContestService.addContest(contest)
      .then((res) => {
        this.setState({
          status: true,
          message: "Contest Saved Successfully!",
          name: "",
          capacity: "",
        });
      })
      .catch((error) => {
        this.setState({
          status: false,
          message: "Failed to Save Contest!",
        });
      });
  };

  onCancel = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      capacity: "",
      registration_allowed: true,
      status: false,
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Create Contest</h3>
        <ContestForm
          handleNameChange={this.handleNameChange}
          handleCapacityChange={this.handleCapacityChange}
          handleRegistrationAllowedChange={this.handleRegistrationAllowedChange}
          handleFormSubmit={this.handleFormSubmit}
          // add all the necessary props here
          // hint: every input the form takes
        />
        {this.state.message}
      </div>
    );
  }
}
