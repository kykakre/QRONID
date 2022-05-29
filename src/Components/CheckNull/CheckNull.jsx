import React from "react";
import styled from "styled-components";
import Btn from "../Btn";

export default function QronNull() {
  const Block = styled.div`
    padding-top: 80px;
    padding-bottom: 40px;
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
    padding-bottom: 40px;
  `;
  return (
    <Block>
      <Title>Получайте кешбэк за покупки</Title>
      <Text>
        Все чеки будут сохраняться в истории платежей, а мы начислим кешбэк
      </Text>
      <Btn text="Хочу кешбэк" />
    </Block>
  );
}
