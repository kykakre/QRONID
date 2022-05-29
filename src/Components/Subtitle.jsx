import React from "react";
import styled from "styled-components";
export default function Subtitle(props) {
  const Subtitle = styled.div`
    font-size: 14px;
    line-height: 110%;
    margin-top: 18px;
  `;
  return <Subtitle>{props.subtitle}</Subtitle>;
}
