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
export const Header = styled.h1`
  position: relative;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  animation: ${header} 2s;
  animation-fill-mode: forwards;
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
  background-color: #42c41a;
  border: none;
  color: white;
  margin: 20px 0;
  border-radius: 3px;
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
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  position: relative;
  animation: ${myform} 2s;
  @media (min-width: 700px) {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerForCreateAccountFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100px;
  border-radius: 3px;
  padding: 9px;
`;
export const ContainerForContainerForCreateAccountFormContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
`;

export const InputErrorColor = styled.input`
  border-bottom: 1px solid red;
  background-color: rgba(255, 0, 0, 0.171);
`;

export const InputNormalColor = styled.input`
  height: 46px;
  width: 323px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
`;

export const LabelAndInputRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const LabelAndInputRowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkForLogin = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 3px;
  position: absolute;
  right: 30px;
  top: 40px;
  font-size: 20px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.2);
`;
export const LinkForLoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const BackgroungPhoto = styled.div`
  background: no-repeat center center fixed;
  left: -10px;
  top: -10px;
  bottom: -10px;
  position: fixed;
  right: -10px;
  filter: blur(6px);
  -webkit-filter: blur(8px);
`;

export const Color = styled.div`
  background: linear-gradient(#af96d4, #9b88b9);
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
