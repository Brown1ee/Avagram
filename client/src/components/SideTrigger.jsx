import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  padding-left: 8px;
  position: absolute;
  top: 5;
  left: 0;
  z-index: 1;
  @media (min-width: 700px) {
    display: none;
  }
`;
export const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: black;
`;
