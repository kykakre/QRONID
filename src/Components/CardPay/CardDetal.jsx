import React from "react";
import styled from "styled-components";
import del from "../../Img/icon/del.svg";

export default function CardDetal(props) {
  const Card = styled.div`
    display: flex;
    background: radial-gradient(
      47.05% 119.14% at 49.88% 50.66%,
      #cbcbcb 0%,
      #e6e6e6 79.34%
    );
    height: 115px;
    width: 46%;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 21px;
    padding-top: 21px;
    padding-left: 23px;
    padding-right: 23px;
    background-size: 100%, 100%;
    transition: 0.38s ease-in-out;
    margin-bottom: 25px;
    @media (max-width: 1400px) {
      width: 100%;
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

  const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Logo = styled.img`
    width: 70px;
    height: 10px;
    object-fit: contain;
  `;
  const Del = styled.img`
    width: 10px;
    height: 10px;
    object-fit: contain;
  `;
  return (
    <Card>
      <Flex>
        <Logo src={props.logo} />
        <Del src={del} />
      </Flex>
      <Flex>
        <Text>{props.number}</Text>
        <Icon src={props.bank} />
      </Flex>
    </Card>
  );
}
