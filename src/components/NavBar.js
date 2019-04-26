import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const NavBarItem = styled.li`
  list-style-type: none;
`;

const LinkButton = styled(Link)`
  flex: 1;
  text-decoration: none;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  color: #333;
`;

const NavBar = () => {
  return (
    <NavBarList>
      <NavBarItem>
        <LinkButton to="/">Public</LinkButton>
      </NavBarItem>
      <NavBarItem>
        <LinkButton to="/private">Private</LinkButton>
      </NavBarItem>
      <NavBarItem>
        <LinkButton to="/login">Login</LinkButton>
      </NavBarItem>
      <NavBarItem>
        <LinkButton to="/logout">Logout</LinkButton>
      </NavBarItem>
    </NavBarList>
  );
};

export default NavBar;
