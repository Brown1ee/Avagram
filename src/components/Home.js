import React, { Component } from "react";
import "./LoggInn.jsx";
import "./Login.jsx";
import axios from "axios";
import { Header } from "./Home.jsx";
import {
  ErrorText,
  CreateAccountButton,
  CreateAccountFormContainer,
  ContainerForCreateAccountFormContainer,
  InputErrorColor,
  InputNormalColor,
  LabelAndInputRow,
  LabelAndInputRowContainer,
  LinkForLogin,
  LinkForLoginContainer,
  GlobalStyle,
  ContainerForContainerForCreateAccountFormContainer
} from "./Home.jsx";
import { BackgroungPhoto } from "./Home.jsx";
import { Color } from "./Home.jsx";

class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: ""
  };

  onSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/register", this.state)
      .then(res => {
        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          this.props.history.push("/secret");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        this.setState({ error: err.response.data });
      });
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { error } = this.state;

    return (
      <div>
        <BackgroungPhoto>
          <Color />
          <img
            src="https://image.freepik.com/free-photo/multi-ethnic-group-friends-talking-using-smartphones-meeting_1163-5149.jpg"
            width="100%"
            height="100%"
            alt="back-font"
          />
        </BackgroungPhoto>

        <GlobalStyle />
        <LinkForLoginContainer>
          <LinkForLogin to="/authenticate">Login</LinkForLogin>
        </LinkForLoginContainer>
        <ContainerForContainerForCreateAccountFormContainer>
          <ContainerForCreateAccountFormContainer>
            <Header>Sign up for your account</Header>
            <CreateAccountFormContainer>
              <form onSubmit={this.onSubmit}>
                <LabelAndInputRowContainer>
                  <LabelAndInputRow>
                    {error ? (
                      <InputErrorColor
                        type="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    ) : (
                      <InputNormalColor
                        type="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    )}
                  </LabelAndInputRow>
                  {error && <ErrorText>{error}</ErrorText>}

                  <LabelAndInputRow>
                    {error ? (
                      <InputErrorColor
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    ) : (
                      <InputNormalColor
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    )}
                  </LabelAndInputRow>
                  {error && <ErrorText>{error}</ErrorText>}
                  <LabelAndInputRow>
                    {error ? (
                      <InputErrorColor
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    ) : (
                      <InputNormalColor
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    )}
                  </LabelAndInputRow>
                  {error && <ErrorText>{error}</ErrorText>}
                  <LabelAndInputRow>
                    {error ? (
                      <InputErrorColor
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    ) : (
                      <InputNormalColor
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        require="true"
                      />
                    )}
                  </LabelAndInputRow>

                  {error && <ErrorText>{error}</ErrorText>}
                  <CreateAccountButton type="submit" value="Create Account" />
                </LabelAndInputRowContainer>
              </form>
            </CreateAccountFormContainer>
          </ContainerForCreateAccountFormContainer>
        </ContainerForContainerForCreateAccountFormContainer>
      </div>
    );
  }
}

export default Home;
