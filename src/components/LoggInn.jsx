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
  width: 400px;
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  position: absolute;
  padding-bottom: 11px;
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
export const ContainerForFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
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
`;

export const InputForCheckbox = styled.input`
  width: 15px;
  height: 15px;
`;

export const LogInButton = styled.input`
  border-radius: 5px;
  position: relative;
  left: 23px;
  height: 40px;
  width: 80px;
  border: none;
  margin-top: 30px;
  width: 300px;
  color: white;
  background-color: #4ab1f5;
  margin-left: 60px;
  height: 50px;
  width: 120px;
`;

export const Input = styled.input`
  height: 38px;
  border-radius: 5px;
  border: none;
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
  font-size: 40px;
  color: white;
  animation: ${emblema} 2s;
  animation-fill-mode: forwards;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to right top, #42464c, #0e7189, #00a09d, #00cb79, #a8eb12);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
`;

