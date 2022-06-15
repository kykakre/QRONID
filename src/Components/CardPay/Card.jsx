import React from "react";
import styled from "styled-components";
import more from "../../Img/icon/more.svg";

export default function Card(props) {
  const Card = styled.a`
    display: flex;
    background: radial-gradient(
      47.05% 119.14% at 49.88% 50.66%,
      #cbcbcb 0%,
      #e6e6e6 79.34%
    );
    height: 115px;
    width: 17%;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 14px;
    padding-left: 19px;
    padding-right: 19px;
    background-size: 100%, 100%;
    transition: 0.38s ease-in-out;
    margin-right: 15px;
    @media (max-width: 1400px) {
      width: 25%;
    }
    &:hover {
      background-size: 150%, 100%;
      transform: rotate3d(0, -1, 0, -15deg);
    }
  `;
  const Text = styled.div`
    font-weight: 500;
    font-size: 18px;
  `;
  const Icon = styled.img`
    width: 34px;
    height: 21px;
    object-fit: contain;
  `;
  const Item = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const ItemSecond = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  `;
  const More = styled.img`
    width: 3px;
    height: 15px;
    object-fit: contain;
    margin-top: 15px;
  `;
  return (
    <Card href="">
      <ItemSecond>
        <More src={more} />
      </ItemSecond>
      <Item>
        <Text>{props.number}</Text>
        <Icon src={props.bank} />
      </Item>
    </Card>
  );
}
