import React from "react";
import QronHistoryItem from "./QronHistoryItem";
import styled from "styled-components";
import Btn from "../Btn";

export default function QronHistory(props) {
  let Item = props.pay.map((e) => (
    <QronHistoryItem
      id={e.id}
      icon={e.icon}
      type={e.type}
      name={e.name}
      pay={e.pay}
    />
  ));
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  const Cart = styled.div`
    margin-top: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(203, 203, 203, 0.46);
    border-radius: 30px;
    height: 30px;
    margin-bottom: 10px;
    width: 95px;
  `;
  const Time = styled.div`
    margin-top: 35px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 500;
  `;
  const Container = styled.div`
    margin-bottom: 70px;
  `;
  const Align = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div>
      <Flex>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </Flex>
      <Time>1 марта, вторник </Time>
      <Container>{Item}</Container>
      <Align>
        <Btn text="Показать все" />
      </Align>
    </div>
  );
}
