import React from "react";
import styled from "styled-components";

export default function Title(props) {
  const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
  `;
  return <Title>{props.title}</Title>;
}
