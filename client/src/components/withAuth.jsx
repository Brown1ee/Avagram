import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./withAuth";
import NavBar from "./NavBar";
import LoadingComponent from "./LoadingComponent";

export default function withAuth(ComponentToProtect, shouldRedirect) {
  return class extends Component {
    state = {
      loading: true,
      redirect: false,
      isAuthenticated: false
    };

    componentDidMount() {
      fetch("http://localhost:8080/checkToken", {
        headers: {
          "x-access-token": sessionStorage.getItem("token")
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false, isAuthenticated: true });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return <LoadingComponent />;
      }
      if (redirect && shouldRedirect) {
        return <Redirect to="/" />;
      }

      return (
        <React.Fragment>
          <NavBar {...this.state} />
          <ComponentToProtect {...this.props} {...this.state} />
        </React.Fragment>
      );
    }
  };
}
