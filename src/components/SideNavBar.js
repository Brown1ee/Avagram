import React, { Component } from "react";
import { Nav, Li, LinkTo, Ul } from "./SideNavBar.jsx";

export default class SideNavBar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Ul>
            <Li>
              <LinkTo to="/secret">My Profile</LinkTo>
            </Li>
            <Li>
              <LinkTo to="/logout">Logout</LinkTo>
            </Li>
          </Ul>
        </Nav>
      </div>
    );
  }
}
