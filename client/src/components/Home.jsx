import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const header = keyframes`
  0% {
    top: -200px;
  }
  100% {
  top: 10px;
  }
`;
export const Header = styled.p`
  font-size: 22px;
  position: relative;
  text-align: center;
  color: black;
  font-family: "Marcellus SC", serif;
  animation: ${header} 2s;
  animation-fill-mode: forwards;
  @media (max-width: 700px) {
    color: white;
  }
`;

export const ErrorText = styled.p`
  font-size: 10px;
  color: red;
`;

export const CreateAccountButton = styled.input`
  display: flex;
  flex: auto;
  justify-content: center;
  height: 46px;
  background-color: black;
  border: none;
  color: white;
  margin: 20px 0;
  border-radius: 9px;
`;

export const myform = keyframes`
0%{
  left: -1000px
}
100%{
left: 0px;
}
`;

export const CreateAccountFormContainer = styled.div`
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  position: relative;
  animation: ${myform} 2s;
  padding: 20px;
  @media (min-width: 700px) {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerForCreateAccountFormContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 9px;
`;
export const ContainerForContainerForCreateAccountFormContainer = styled.div`
  width: 40%;
  height: 100vh;
  top: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    top: 0px;
    right: 0px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputErrorColor = styled.input`
  border-bottom: 1px solid red;
  background-color: rgba(255, 0, 0, 0.171);
  height: 46px;
  max-width: 323px;
  min-width: 290px;
  flex: auto;
  display: flex;
  border-radius: 9px;
  padding: 0 10px;
`;

export const InputNormalColor = styled.input`
  height: 46px;
  max-width: 323px;
  min-width: 290px;
  flex: auto;
  display: flex;
  border-radius: 9px;
  border: 1px solid #f2f2f2;
  padding: 0 10px;
  background-color: #f9fbfc;
`;

export const LabelAndInputRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const LabelAndInputRowContainer = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkForLogin = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px;
  border-radius: 3px;
  position: absolute;
  font-family: "Marcellus SC", serif;
  right: 30px;
  top: 22px;
  font-size: 22px;
  z-index: 3;
  @media (max-width: 768px) {
    position: absolute;
    font-family: "Marcellus SC", serif;
    right: 17px;
    color: white;
  }
`;

export const BackgroungPhoto = styled.div`
  width: 60%;
  height: 100vh;
  top: 0px;
  position: fixed;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    top: 0px;
    position: fixed;
  }
`;
export const BackgroundImg = styled.img`
  width: 100%;
  height: 100vh;
`;

export const Logo = styled.img`
  width: 100px;
  height: 70px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const LogoText = styled.p`
  font-size: 40px;
  color: black;
  margin-right: 9px;
  font-family: "Marcellus SC", serif;
  @media (max-width: 700px) {
    color: white;
  }
`;
export const PresentationWeb = styled.p`
  @media (min-width: 780px) {
    position: relative;
    display: flex;
    justify-content: center;
    top: 390px;
    color: white;
    font-size: 50px;
    width: 60%;
    font-family: "Yesteryear", cursive;
  }
`;

export const ContainerForLogoAndText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  z-index: 3;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    position:absolute; top:0; bottom:0; right:0; left:0;
  }
  * {
    margin:0;
    padding:0;
  }
  html {
    height: 100%;
  }
`;

export const ContainerForSocials = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  align-items: center;
`;

export const SocialsEmblemas = styled.img``;
