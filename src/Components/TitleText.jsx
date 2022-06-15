import React from "react";
import styled from "styled-components";

export default function TitleText(props) {
  const Title = styled.div`
    color: #01a2fa;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    line-height: 110%;
  `;
  const Text = styled.div`
    font-size: 16px;
    line-height: 110%;
  `;
  const Item = styled.div`
    width: 32%;
    line-height: 110%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  return (
    <Item>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Item>
  );
}
