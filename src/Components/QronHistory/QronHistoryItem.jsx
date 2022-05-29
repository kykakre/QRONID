import React from "react";
import styled from "styled-components";

export default function QronHistoryItem(props) {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  `;
  const Item = styled.div`
    display: flex;
    align-items: center;
  `;
  const Logo = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
    margin-right: 15px;
  `;
  const Type = styled.div`
    color: #cbcbcb;
    font-size: 9px;
  `;
  const Firm = styled.div`
    font-size: 14px;
    font-weight: 600;
  `;
  const Cost = styled.div`
    font-size: 16px;
    font-weight: 600;
  `;
  return (
    <Flex>
      <Item>
        <Logo src={props.icon} />
        <div>
          <Type>{props.type}</Type>
          <Firm>{props.name}</Firm>
        </div>
      </Item>
      <Cost>{props.pay} ₽ </Cost>
    </Flex>
  );
}
