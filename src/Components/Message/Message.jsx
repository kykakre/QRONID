import React from "react";
import styled from "styled-components";

export default function Message(props) {
  const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `;
  const Title = styled.div`
    font-size: 25px;
    line-height: 130%;
    margin-bottom: 25px;
    width: 60%;
    text-align: center;
  `;
  const Item = styled.div``;
  const Text = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
  `;
  const TextArea = styled.textarea`
    resize: none;
    border: 1px solid #cbcbcb;
    border-radius: 20px;
    font-family: "Commissioner";
    font-size: 14px;
    width: 680px;
    height: 170px;
    padding-top: 22px;
    padding-left: 25px;
    outline: none;
    margin-bottom: 30px;
    &::placeholder {
      color: #cbcbcb;
    }
  `;

  return (
    <Column>
      <Title>
        Здесь Вы можете задать вопрос. Специалист службы поддержки свяжется с
        Вами и подскажет решение.
      </Title>
      <Item>
        <Text>Ваше сообщение:</Text>
        <TextArea placeholder="Напишите сообщение..." wrap></TextArea>
      </Item>
      <input className="submit" type="submit"></input>
    </Column>
  );
}
