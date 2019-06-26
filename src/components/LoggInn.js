import React, { Component } from "react";
import {
  Container,
  Text,
  Description,
  Span,
  FormContainer,
  ContainerForFormContainer,
  InputForCheckbox,
  Input,
  Emblema,
  GlobalStyle,
  JustFormContainer,
  BackgroungPhoto,
  BackgroundImg
} from "./LoggInn.jsx";
import axios from "axios";
import classNames from "classnames";
import { Label } from "./LoggInn.jsx";
import { Row } from "./LoggInn.jsx";
import { Checkbox } from "./LoggInn.jsx";
import { LogInButton } from "./LoggInn.jsx";
import background from "../static/background.jpg";

class LoggInn extends Component {
  _isMounted = true;
  state = {
    message: "Loading...",
    email: "",
    password: "",
    error: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    axios
      .post("https://avagram.herokuapp.com/api/authenticate", this.state)
      .then(res => {
        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          this.props.history.push("/secret");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => console.log("aici", err));
  };
  // this.setState({ error: err.response.data.error });

  componentDidMount() {
    fetch("https://avagram.herokuapp.com/api/home")
      .then(res => res.text())
      .then(res => {
        if (this._isMounted) {
          this.setState({ message: res });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let inputColor = classNames({
      redInput: this.state.error
    });
    return (
      <div>
        <BackgroungPhoto>
          <BackgroundImg src={background} />
        </BackgroungPhoto>
        <GlobalStyle />
        <Container>
          <Text>
            <Description>{this.state.message}</Description>
          </Text>
        </Container>
        <ContainerForFormContainer>
          <FormContainer>
            <form onSubmit={this.onSubmit}>
              <Emblema>Login Now</Emblema>
              <JustFormContainer>
                <Row>
                  <Label>Email</Label>
                  <Input
                    className={[inputColor, "input-for-logginn"].join(" ")}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </Row>
                <Span>{this.state.error}</Span>

                <Row>
                  <Label>Password</Label>
                  <Input
                    className={[inputColor, "input-for-logginn"].join(" ")}
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Span>{this.state.error}</Span>
                <div>
                  <Checkbox>
                    <InputForCheckbox type="checkbox" />
                    <span />
                    Remember me
                  </Checkbox>

                  <LogInButton type="submit" value="Log In" />
                </div>
              </JustFormContainer>
            </form>
          </FormContainer>
        </ContainerForFormContainer>
      </div>
    );
  }
}

export default LoggInn;
