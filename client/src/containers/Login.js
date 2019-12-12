import React, { Component } from "react";
import { Heading, Form, Button } from "react-bulma-components";
import { Auth } from "aws-amplify";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.hasLoggedIn(true);
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <Heading size={2}>Login</Heading>
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Control>
              <Form.Input
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Password</Form.Label>
            <Form.Control>
              <Form.Input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Control>
          </Form.Field>

          <Button
            type="submit"
            disabled={!this.validateForm()}
            loading={this.state.isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
