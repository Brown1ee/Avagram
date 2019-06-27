import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const myani = keyframes`
0%{
left: -400px;
}
100%{
left: 0;
}
`;

export const Nav = styled.nav`
  top: 0;
  left: 0;
  background-color: white;
  position: absolute;
  height: 100vh;
  width: 50%;
  margin: auto;
  border-right: 1px solid black;
  animation: ${myani} 1s;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  list-style: none;
  color: black;
`;

export const LinkTo = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  justify-content: space-around;
  height: 70px;
`;
