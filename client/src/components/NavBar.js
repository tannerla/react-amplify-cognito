import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bulma-components";

class NavBar extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.resetActive();
  };

  handleLogout = () => {
    this.props.logout();
    this.resetActive();
  };

  resetActive() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    return (
      <Navbar color="light" active={this.state.active}>
        <Navbar.Brand>
          <Navbar.Burger onClick={this.handleClick} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container position="start">
            <Navbar.Item renderAs={Link} to="/" onClick={this.handleClick}>
              <Button color="success">Unprotected</Button>
            </Navbar.Item>
            <Navbar.Item
              renderAs={Link}
              to="/protected"
              onClick={this.handleClick}
            >
              <Button color="danger">Protected</Button>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            {this.props.isLoggedIn ? (
              <Navbar.Item onClick={this.handleLogout}>
                <Button>Logout</Button>
              </Navbar.Item>
            ) : (
              <Fragment>
                <Navbar.Item
                  renderAs={Link}
                  to="/signup"
                  onClick={this.handleClick}
                >
                  <Button>Signup</Button>
                </Navbar.Item>
                <Navbar.Item
                  renderAs={Link}
                  to="/login"
                  onClick={this.handleClick}
                >
                  <Button>Login</Button>
                </Navbar.Item>
              </Fragment>
            )}
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default NavBar;
