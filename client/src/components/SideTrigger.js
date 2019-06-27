import React from "react";
import { Container, Line } from "./SideTrigger.jsx";

export default function SideTrigger(props) {
  return (
    <Container onClick={props.handleSideBar}>
      <Line />
      <Line />
      <Line />
    </Container>
  );
}
