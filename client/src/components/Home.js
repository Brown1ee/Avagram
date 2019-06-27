import React, { Component } from "react";
import "./LoggInn.jsx";
import axios from "axios";
import logo from "../static/logo.png";
import background from "../static/background.jpg";
import tweet from "../static/tweet.png";
import face from "../static/face.png";
import insta from "../static/insta.png";
import {
  Header,
  ErrorText,
  CreateAccountButton,
  CreateAccountFormContainer,
  ContainerForCreateAccountFormContainer,
  InputErrorColor,
  InputNormalColor,
  LabelAndInputRow,
  LabelAndInputRowContainer,
  LinkForLogin,
  GlobalStyle,
  ContainerForContainerForCreateAccountFormContainer,
  ContainerForSocials,
  SocialsEmblemas,
  PresentationWeb,
  Logo,
  LogoText,
  ContainerForLogoAndText,
  BackgroundImg,
  BackgroungPhoto
} from "./Home.jsx";

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
          <BackgroundImg src={background} />
        </BackgroungPhoto>

        <GlobalStyle />
        <PresentationWeb>Start a Journey...</PresentationWeb>
        <LinkForLogin to="/authenticate">Login</LinkForLogin>
        <ContainerForContainerForCreateAccountFormContainer>
          <ContainerForLogoAndText>
            <Logo src={logo} alt="back-font" />
            <LogoText>Avagram</LogoText>
          </ContainerForLogoAndText>
          <ContainerForCreateAccountFormContainer>
            <Header>Sign Up </Header>
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
          <ContainerForSocials>
            <SocialsEmblemas src={insta} alt="back-font" />
            <SocialsEmblemas src={face} alt="back-font" />
            <SocialsEmblemas src={tweet} alt="back-font" />
          </ContainerForSocials>
        </ContainerForContainerForCreateAccountFormContainer>
      </div>
    );
  }
}

export default Home;
