import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.div`
  text-align: center;
  font-family: "Abril Fatface", cursive;
`;

export const Description = styled.p`
  color: rgb(44, 44, 44);
`;

export const Label = styled.label`
  text-align: left;
  display: inline-block;
  margin-top: 20px;
  padding: 5px 0;
  @media (max-width: 1060px) {
    color: white;
  }
`;

export const Span = styled.span`
  width: 230px;
  text-align: left;
  padding: 0;
  top: 0;
  color: red;
`;

export const RedInput = styled.span`
  width: 230px;
  text-align: left;
  padding: 0;
  top: 0;
  color: red;
`;
export const form = keyframes`
0%{
  left: -1000px
}
100%{
left: 0px;
}
`;

export const JustFormContainer = styled.div`
  position: relative;
  animation: ${form} 2s;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  padding: 9px;
`;

export const BackgroungPhoto = styled.div`
  width: 60%;
  height: 100vh;
  top: 0px;
  position: fixed;
  @media (max-width: 1060px) {
    width: 100%;
    height: 100vh;
    top: 0px;
    position: fixed;
  }
`;

export const ContainerForFormContainer = styled.div`
  width: 40%;
  height: 100vh;
  top: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1060px) {
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

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const Checkbox = styled.label`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  right: 20px;
  @media (max-width: 1060px) {
    color: white;
  }
`;

export const InputForCheckbox = styled.input`
  width: 15px;
  height: 15px;
`;

export const LogInButton = styled.input`
  border-radius: 9px;
  position: relative;
  left: 23px;
  height: 40px;
  width: 80px;
  border: none;
  margin-top: 30px;
  width: 300px;
  color: white;
  background-color: black;
  margin-left: 60px;
  height: 50px;
  width: 120px;
`;

export const Input = styled.input`
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
export const emblema = keyframes`
0%{
  top: -200px
}
100%{
top: 40px;
}
`;

export const Emblema = styled.p`
  position: relative;
  text-align: center;
  font-size: 22px;
  color: black;
  animation: ${emblema} 2s;
  animation-fill-mode: forwards;
  font-family: "Marcellus SC", serif;
  padding: 30px;
  @media (max-width: 1060px) {
    color: white;
  }
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

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100vh;
`;
