import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  border-bottom: 1px solid silver;
  top: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: lighter;
  position: fixed;
  width: 100%;
  background-color: white;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: auto;
`;

export const Li = styled.li`
  list-style: none;
  margin: 10px;
  padding-left: 40px;
`;

export const LinkForLogout = styled(Link)`
  text-decoration: none;
  font-size: 19px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
`;
export const LinkForHome = styled(Link)`
  display: none;
`;
