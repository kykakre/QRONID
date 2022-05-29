import React from "react";
import styled from "styled-components";

export default function QronNull() {
  const Block = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    text-align: center;
  `;
  const Title = styled.div`
    font-size: 25px;
    font-weight: 500;

    margin-bottom: 7px;
  `;
  const Text = styled.div`
    font-size: 16px;
    line-height: 130%;
    width: 70%;
  `;
  return (
    <Block>
      <Title>Платежей пока нет</Title>
      <Text>
        Радуйте себя покупками, получайте баллы, а мы покажем это в истории
        платежей
      </Text>
    </Block>
  );
}
