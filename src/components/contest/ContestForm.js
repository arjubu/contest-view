import React from "react";

// this form takes all the necessary props and renders the form
class ContestForm extends React.Component {
  render() {
    return (
      <div classname="main">
        <form id="contest" onSubmit={this.props.handleFormSubmit}>
          <label>
            Name:
            <input
              id="name"
              type="text"
              value={this.props.name}
              onChange={this.props.handleNameChange}
              required
            />
          </label>
          <br />
          <label>
            Capacity:
            <input
              name="capacity"
              type="number"
              value={this.props.capacity}
              onChange={this.props.handleCapacityChange}
            />
          </label>
          <br />
          <label>
            Registration Allowed:
            <input
              name="registration_allowed"
              type="checkbox"
              checked={this.props.registration_allowed}
              onChange={this.props.handleRegistrationAllowedChange}
            />
          </label>
          <br />
          <button type="submit" value="Submit">
            Save
          </button>
          <button type="reset" value="Reset" onClick={this.props.onCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default ContestForm;
