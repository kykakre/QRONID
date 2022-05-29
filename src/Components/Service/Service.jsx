import React from "react";
import styled from "styled-components";
import Title from "../Title";

export default function Service() {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-top: 45px;
    flex-wrap: wrap;
  `;
  const Item = styled.div`
    background: rgba(230, 230, 230, 0.25);
    box-shadow: 0px 0px 15px 5px rgba(203, 203, 203, 0);
    border-radius: 12px;
    width: 120px;
    height: 120px;
    margin-right: 25px;
    transition: 0.38s ease-in-out;
    cursor: pointer;
    margin-bottom: 10px;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 0px 15px 5px rgba(203, 203, 203, 0.46);
    }
  `;
  return (
    <div className="card-min">
      <Title title="Оплата услуг" />
      <Flex>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Flex>
    </div>
  );
}
