import React, { Component } from "react";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import Input, { InputLabel } from "material-ui/Input";
import Button from "material-ui/Button";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  clearForm = event => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  onChange = event => {
    var property = event.target.id;
    var value = event.target.value;
    this.setState({ [property]: value });
  };
  handleSubmit = event => {};

  render() {
    const { pristine, submitting } = this.props;

    return (
      <div>
        <div className="row col">
          <Typography>Contact</Typography>
        </div>
        <div className="row col">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <TextField
                id="firstName"
                input={<Input name="firstName" id="firstName" />}
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div className="row">
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <TextField
                id="lastName"
                input={<Input name="lastName" id="lastName" />}
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
            <div className="row">
              <InputLabel htmlFor="email">Email</InputLabel>
              <TextField
                id="email"
                input={<Input name="email" id="email" />}
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="row">
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <TextField
                id="phone"
                input={<Input name="phone" id="phone" />}
                value={this.state.phone}
                onChange={this.onChange}
              />
            </div>
            <div className="row">
              <InputLabel htmlFor="message">Message</InputLabel>
              <TextField
                id="message"
                input={<Input name="message" id="message" />}
                value={this.state.message}
                onChange={this.onChange}
              />
            </div>
            <div className="row">
              <Button variant="raised" disabled={pristine || submitting}>
                Submit
              </Button>
              <Button
                disabled={pristine || submitting}
                onClick={this.clearForm}
              >
                Clear
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
