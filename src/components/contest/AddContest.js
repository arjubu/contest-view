import React, { Component } from "react";
import ContestService from "../../service/contest.service";
import ContestForm from "./ContestForm";
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
      registration_allowed: this.state.registration_allowed,
    };

    ContestService.addContest(contest)
      .then((res) => {
        this.setState({
          status: true,
          message:
            "Contest added with name " +
            contest.name +
            ", with capacity " +
            contest.capacity +
            ", with registration_allowed as " +
            contest.registration_allowed,
          name: "",
          capacity: "",
        });
      })
      .catch((error) => {
        this.setState({
          status: false,
          message: "Error in creating contest",
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
          handleFormSubmit={this.handleFormSubmit}
          handleNameChange={this.handleNameChange}
          handleCapacityChange={this.handleCapacityChange}
          handleRegistrationAllowedChange={this.handleRegistrationAllowedChange}
          name={this.state.name}
          capacity={this.state.capacity}
          registration_allowed={this.state.registration_allowed}
          onCancel={this.onCancel}
        />
        {this.state.message}
      </div>
    );
  }
}
