import React, { Component } from "react";
import { Heading, Form, Button } from "react-bulma-components";
import { Auth } from "aws-amplify";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password
      });

      this.setState({ newUser });
    } catch (e) {
      if (e.name === "UsernameExistsException") {
        alert(
          "You haven't yet verified, please check your email to find the confirmation code."
        );

        await Auth.resendSignUp(this.state.email);

        this.setState({
          newUser: {
            username: this.state.email,
            password: this.state.password
          }
        });
      } else {
        alert(e.message);
      }
    }

    this.setState({ isLoading: false });
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      await Auth.signIn(this.state.email, this.state.password);

      this.props.hasLoggedIn(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <Form.Field>
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control>
            <Form.Input
              name="confirmationCode"
              type="tel"
              value={this.state.confirmationCode}
              onChange={this.handleChange}
            />
          </Form.Control>
          <Form.Help>Please check your email for the code.</Form.Help>
        </Form.Field>

        {/* <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup> */}
        <Button
          disabled={!this.validateConfirmationForm()}
          type="submit"
          loading={this.state.isLoading}
        >
          Verify
        </Button>
      </form>
    );
  }

  // renderForm() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <FormGroup controlId="email" bsSize="large">
  //         <ControlLabel>Email</ControlLabel>
  //         <FormControl
  //           autoFocus
  //           type="email"
  //           value={this.state.email}
  //           onChange={this.handleChange}
  //         />
  //       </FormGroup>
  //       <FormGroup controlId="password" bsSize="large">
  //         <ControlLabel>Password</ControlLabel>
  //         <FormControl
  //           value={this.state.password}
  //           onChange={this.handleChange}
  //           type="password"
  //         />
  //       </FormGroup>
  //       <FormGroup controlId="confirmPassword" bsSize="large">
  //         <ControlLabel>Confirm Password</ControlLabel>
  //         <FormControl
  //           value={this.state.confirmPassword}
  //           onChange={this.handleChange}
  //           type="password"
  //         />
  //       </FormGroup>
  //       <Button
  //         disabled={!this.validateForm()}
  //         type="submit"
  //         isLoading={this.state.isLoading}
  //         text="Signup"
  //       />
  //     </form>
  //   );
  // }

  render() {
    return (
      <div className="Signup">
        <Heading size={2}>Signup</Heading>
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
