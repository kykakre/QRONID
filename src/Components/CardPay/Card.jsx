import React from "react";
import styled from "styled-components";

export default function Card(props) {
  const Card = styled.div`
    display: flex;
    background: radial-gradient(
      47.05% 119.14% at 49.88% 50.66%,
      #cbcbcb 0%,
      #e6e6e6 79.34%
    );
    height: 115px;
    width: 25%;
    border-radius: 12px;
    justify-content: space-between;
    padding-bottom: 15px;
    padding-left: 25px;
    padding-right: 25px;
    align-items: flex-end;
  `;
  const Text = styled.div`
    font-weight: 500;
    font-size: 14px;
  `;
  const Icon = styled.img`
    width: 35px;
    height: 20px;
    object-fit: contain;
  `;
  return (
    <Card>
      <Text>{props.text}</Text>
      <Icon src={props.icon} />
    </Card>
  );
}
