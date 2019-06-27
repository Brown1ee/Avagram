import React from "react";
import { LogoutButton, ContainerDiv } from "./Logout.jsx";
import SideTrigger from "./SideTrigger.js";
import SideNavBar from "./SideNavBar";

export default class Logout extends React.Component {
  state = {
    message: "",
    sideBar: false
  };
  handleLogout = () => {
    sessionStorage.removeItem("token");
    this.props.history.push("/secret");
  };
  handleSideBar = () => {
    this.setState(prevState => {
      return { sideBar: !prevState.sideBar };
    });
  };

  render() {
    const { sideBar } = this.state;
    let sideNavBar;
    if (sideBar) {
      sideNavBar = <SideNavBar />;
    }
    return (
      <div>
        <SideTrigger handleSideBar={this.handleSideBar} />
        {sideNavBar}
        <ContainerDiv>
          <LogoutButton onClick={this.handleLogout}>Log Out</LogoutButton>
        </ContainerDiv>
      </div>
    );
  }
}
