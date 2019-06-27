import React from "react";
import { Nav, Ul, Li, LinkForLogout, LinkForHome } from "./NavBar.jsx";

const NavBar = props => {
  return (
    <div>
      {!props.isAuthenticated ? (
        <Li>
          <LinkForHome to="/">Home</LinkForHome>
        </Li>
      ) : (
        <Nav>
          <Ul>
            <Li>
              <LinkForLogout to="/secret">My Profile</LinkForLogout>
            </Li>
            <Li>
              <LinkForLogout to="/logout">Logout</LinkForLogout>
            </Li>
          </Ul>
        </Nav>
      )}
    </div>
  );
};

export default NavBar;
