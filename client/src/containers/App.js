import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import AuthService from "../services/AuthService";
import NavBar from "../components/NavBar";
import Routes from "../Routes";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  async componentDidMount() {
    const isLoggedIn = await AuthService.isLoggedIn();
    this.hasLoggedIn(isLoggedIn);
  }

  hasLoggedIn = value => {
    this.setState({ isLoggedIn: value });
  };

  logout = async () => {
    AuthService.logout();
    this.hasLoggedIn(false);
    this.props.history.push("/login");
  };

  render() {
    const childProps = {
      isLoggedIn: this.state.isLoggedIn,
      hasLoggedIn: this.hasLoggedIn
    };

    return (
      <Fragment>
        <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <Routes childProps={childProps} />
      </Fragment>
    );
  }
}

export default withRouter(App);
